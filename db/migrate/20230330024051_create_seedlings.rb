class CreateSeedlings < ActiveRecord::Migration[7.0]
  def change
    create_table :seedlings do |t|
      t.string :name
      t.decimal :price, precision: 10, scale: 2
      t.text :description
     
     

      t.timestamps
    end
  end
end
