
class FarmersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    farmers = Farmer.all
    render json: farmers, include: :seedlings
  end

  def show
    farmer = Farmer.find_by(id: params[:id])
    if farmer
     
      render json: farmer
    else
      render json: { error: "Farmer not found" }, status: :not_found
    end
  end

  def create
    farmer = Farmer.new(farmers_params)
    if farmer.save
      token = JWT.encode({ farmer_id: farmer.id }, 'farmer', 'HS256')
      render json: { farmer: farmer, token: token }
    else
      render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    @farmer = Farmer.new(farmer_params)
        if @farmer.save
            login!  
            render json: {
            status: :created,
            user: @farmer
        }
       else 
           render json: {
           status: 500,
           errors: @farmer.errors.full_messages
       }
       end
 end

  # def update
  #   farmer = Farmer.find(params[:id])
  #   if farmer.update(farmer_params)
  #     render json: farmer
  #   else
  #     render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   farmer = Farmer.find(params[:id])
  #   if farmer.destroy
  #     render json: { message: 'Farmer successfully deleted' }
  #   else
  #     render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end
  
  private
  
  def farmer_params
    params.permit(:username, :email, :password_digest)
  end

  def farmer_params
    params.require(:farmer).permit(:username, :email, :password_digest)
  end

  def require_login
    unless logged_in?
      render json: {
        status: 401,
        errors: ['You must be logged in to access this section']
      }
    end
  end

    # Allow create, update, and destroy actions only
  #   unless ['create', 'update', 'destroy'].include?(action_name)
  #     render json: { error: 'Forbidden' }, status: :forbidden
  #   end
  # end
end
