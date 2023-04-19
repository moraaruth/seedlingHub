class FarmersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :require_login, except: [:create, :index]

  def index
    farmers = Farmer.all
    render json: farmers
  end

  def create
    farmer = Farmer.create(farmer_params)
    if farmer.valid?
      session[:farmer_id] = farmer.id
      render json: farmer, status: :created
    else
      render json: {errors: farmer.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    farmer = Farmer.find_by(id: session[:farmer_id])
    if farmer
      render json: farmer
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

  def update
    farmer = Farmer.find(params[:id])

    if farmer.update(farmer_params)
      render json: farmer
    else
      render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    farmer = Farmer.find(params[:id])
    farmer.destroy
    head :no_content
  end

  private

  def render_not_found_response
    render json: { error: 'Not found' }, status: :not_found
  end

  def farmer_params
    params.require(:farmer).permit(:username, :email, :password, :password_confirmation)
  end

  def require_login
    unless logged_in?
      render json: { error: 'You must be logged in to access this section' }, status: :unauthorized
    end
  end

  def logged_in?
    !!session[:farmer_id]
  end
end
