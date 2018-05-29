class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.references :user, foreign_key: true
      t.text :text, null: false
      t.datetime :set_datetime, null: false

      t.timestamps
    end
  end
end
