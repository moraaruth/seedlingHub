class Farmer < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    # validates :email, presence: true, uniqueness: true
    
    # has_secure_password  
    has_many :seedlings, dependent: :destroy
    
    def authenticate(password)
      if self.password_digest && BCrypt::Password.new(self.password_digest) == password
        return self
      else
        return false
      end
    end
  end
  