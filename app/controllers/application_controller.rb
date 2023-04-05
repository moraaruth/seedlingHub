class ApplicationController < ActionController::Base

      protect_from_forgery with: :null_session,
      if: Proc.new{|c| c.request.format =~%r{application/json}}
# #     skip_before_action :verify_authenticity_token
# # helper_method :login!, :logged_in?, :current_user,     :authorized_user?, :logout!, :set_user

# # def login!
# #       session[:farmer_id] = @farmer.id
# # end
# # def logged_in?
# #       !!session[:farmer_id]
# # end
# # def current_user
# #       @current_farmer ||= Farmer.find(session[:farmer_id]) if session[:farmer_id]
# # end
# # def authorized_user?
# #        @farmer == current_farmer
# # end
# # def logout!
# #        session.clear
# # end
# # def set_farmer
# #     @farmer = Farmer.find_by(id: session[:farmer_id])
# # end
# # end

# class ApplicationController < ActionController::API
#       include ActionController::Cookies
    
#       rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
#       before_action :authorize
    
#       private
    
#       def authorize
#         @current_farmer = Farmer.find_by(id: session[:farmer_id])
    
#         render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_farmer
#       end
    
#       def render_unprocessable_entity_response(exception)
#         render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
#       end
    
    end