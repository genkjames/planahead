class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.references :user, foreign_key: true
      t.text :task, null: false
      t.boolean :is_complete
      t.date :date, null: false

      t.timestamps
    end
  end
end
