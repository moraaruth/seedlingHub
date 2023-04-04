class FarmerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest

  has_many :seedlings
end
