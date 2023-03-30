# In the ApplicationController, define a helper method to retrieve the current user from the session
class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_farmer
  
    private
  
    def current_farmer
      # Retrieve the current farmer based on the farmer ID stored in the session
      @current_farmer ||= Farmer.find(session[:farmer_id]) if session[:farmer_id]
    end
end
