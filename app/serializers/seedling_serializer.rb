class SeedlingSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :planting_season, :growth_duration, :harvest_time, :soil_type, :water_requirements, :light_requirements, :nutritional_value, :farmer_id

  def price
    object.price.to_f
  end

  belongs_to :farmer
end

