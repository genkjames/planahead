class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.text :text, null: false
      t.date :set_date, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
