class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :username, null: false
      t.text :email, null: false
      t.text :pw_digest, null: false

      t.timestamps
    end
  end
end
