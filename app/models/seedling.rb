class Seedling < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validates :description, length: { maximum: 500 }
  
    belongs_to :farmer


end
