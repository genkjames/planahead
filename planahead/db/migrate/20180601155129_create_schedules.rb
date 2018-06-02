class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.references :user, foreign_key: true
      t.text :text
      t.date :set_date
      t.string :set_time

      t.timestamps
    end
  end
end