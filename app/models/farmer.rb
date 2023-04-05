class Farmer < ApplicationRecord
    # validates :username, presence: true, uniqueness: true
    # validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    # enum for the role attribute to handle authorization
    
    # has_secure_password
    has_many :seedlings
  

   
end
