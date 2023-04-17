class SessionsController < ApplicationController
  # before_action :require_login, except: [:create]

  def create
    farmer = Farmer.find_by(username: session_params[:username])

    if farmer&.authenticate(session_params[:password])
      login!(farmer)
      render json: {
        logged_in: true,
        farmer: farmer
      }
    else
      render json: { 
        status: 401,
        errors: ['Invalid username or password']
      }
    end
  end

  def is_logged_in?
    if logged_in?
      render json: {
        logged_in: true,
        farmer: current_farmer
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:farmer).permit(:username, :password)
  end

  def require_login
    unless logged_in? && current_farmer.present?
      render json: { status: 401, errors: ['You must be logged in to access this section'] }
    end
  end
end
