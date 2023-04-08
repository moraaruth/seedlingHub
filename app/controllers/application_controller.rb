class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :login!, :logged_in?, :current_farmer, :authorized_farmer?, :logout!, :set_farmer

 protect_from_forgery with: :null_session,
 if: Proc.new{|c| c.request.format =~%r{application/json}}


    

    
def login!
      session[:farmer_id] = @farmer.id
end
def logged_in?
      !!session[:farmer_id]
end
def current_farmer
      @current_farmer ||= Farmer.find(session[:farmer_id]) if session[:farmer_id]
end
def authorized_farmer?
       @farmer == current_farmer
end
def logout!
       session.clear
end
def set_farmer
    @farmer = Farmer.find_by(id: session[:farmer_id])
end
end