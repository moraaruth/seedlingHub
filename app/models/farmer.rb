 class Farmer < ActiveRecord::Base
    validates :username, uniqueness: true
    validates :email, presence: true
    
    has_many :seedlings, dependent: :destroy
    
    # has_secure_password
  end
  