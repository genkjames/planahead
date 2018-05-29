class AddDetailsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :set_date, :date, null: false
    add_column :events, :set_time, :time, null: false
  end
end
