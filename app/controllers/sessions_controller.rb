# # require_dependency "sessions_controller"

# # class SessionsController < ApplicationController
# #     def create
# #         @farmer = Farmer.find_by(username: session_params[:username])

# #         if @farmer && @farmer.authenticate(session_params[:password])
# #           login!
# #           render json: {
# #             logged_in: true,
# #             farmer: @farmer
# #           }
# #         else
# #           render json: { 
# #             status: 401,
# #             errors: ['no such farmer, please try again']
# #           }
# #         end
# #     end
# #     def is_logged_in?
# #         if logged_in? && current_farmer
# #           render json: {
# #             logged_in: true,
# #             farmer: current_farmer
# #           }
# #         else
# #           render json: {
# #             logged_in: false,
# #             message: 'no such farmer'
# #           }
# #         end
# #     end
# #     def destroy
# #           logout!
# #           render json: {
# #             status: 200,
# #             logged_out: true
# #           }
# #     end
# #     private
# #     def session_params
# #           params.require(:farmer).permit(:username, :password)
# #     end
# #     end

class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    farmer = Farmer.find_by(username: params[:username])
    if farmer&.authenticate(params[:password])
      session[:farmer_id] = farmer.id
      render json: farmer
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :farmer_id
    head :no_content
  end

end