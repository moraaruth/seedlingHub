class CreateSeedlings < ActiveRecord::Migration[7.0]
  def change
    create_table :seedlings do |t|
      t.string :name, null: false
      t.decimal :price, precision: 10, scale: 2, null: false
      t.text :description, null: false
      t.datetime :planting_season, null: false
      t.integer :growth_duration, null: false
      t.datetime :harvest_time, null: false
      t.string :soil_type, null: false
      t.integer :water_requirements, null: false
      t.integer :light_requirements, null: false
      t.integer :nutritional_value, null: false
     
     

      t.timestamps
    end
  end
end
