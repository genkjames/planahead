class ChangeSetTimeDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :set_time, :string, null: false
  end
end
