class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.references :user, foreign_key: true
      t.text :text, null: false
      t.boolean :is_complete
      t.date :set_date, null: false

      t.timestamps
    end
  end
end
