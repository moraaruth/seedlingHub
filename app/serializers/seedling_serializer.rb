class SeedlingSerializer < ActiveModel::Serializer
  attributes :name, :price, :description

  belongs_to :farmer
end
