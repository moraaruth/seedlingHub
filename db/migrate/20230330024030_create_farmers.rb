class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|

      t.timestamps
    end
  end
end
