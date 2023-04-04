class AddFarmerRefToSeedlings < ActiveRecord::Migration[7.0]
  def change
    add_reference :seedlings, :farmer, foreign_key: true
  end
end
