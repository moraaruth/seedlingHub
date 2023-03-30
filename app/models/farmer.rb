class Farmer < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: { minimum: 6 }
    # enum for the role attribute to handle authorization
    enum role: [:regular, :admin]
    has_secure_password
end
