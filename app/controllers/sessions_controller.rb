
require_dependency "sessions_controller"

class SessionsController < ApplicationController
  def create
    farmer = Farmer.find_by(username: params[:username])
    if farmer&.authenticate(params[:password])
        session[:farmer_id] = farmer.id
        render json: farmer, status: :created
    else
        render json: {error: "Invalid email or password"}, status: :unauthorized
    end
end
  def is_logged_in?
    if logged_in? && current_farmer
      render json: {
        logged_in: true,
        farmer: current_farmer
      }
    else
      render json: {
        logged_in: false,
        message: 'no such farmer'
      }
    end
  end

  def destroy
    logout!
    session.clear
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:farmer).permit(:username, :password)
  end

  def current_farmer
    @current_farmer ||= Farmer.find_by(id: session[:farmer_id])
  end
end
