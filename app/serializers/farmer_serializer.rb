class FarmerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  # has_many :seedlings
end
