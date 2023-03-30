class CreateSeedlings < ActiveRecord::Migration[7.0]
  def change
    create_table :seedlings do |t|

      t.timestamps
    end
  end
end
