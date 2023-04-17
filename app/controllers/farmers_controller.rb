class FarmersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :require_login, except: [:create, :index]

  def index
    farmers = Farmer.all
    render json: farmers
  end

  def show
    farmer = Farmer.find(params[:id])
    render json: farmer
  end

  def create
    @farmer = Farmer.new(farmer_params)
        if @farmer.save
            login!  
            render json: {
            status: :created,
            farmer: @farmer
        }
       else 
           render json: {
           status: 500,
           errors: @farmer.errors.full_messages
       }
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
    params.require(:farmer).permit(:username, :email, :password, :password_confirmation )
  end


  # def require_login
  #   unless current_farmer
  #     render json: { error: 'You must be logged in to access this section' }, status: :unauthorized
  #   end
  # end
end
