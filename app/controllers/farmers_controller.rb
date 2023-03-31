class FarmersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

   #  sets up an authorization filter that requires the user to be an admin to perform certain actions.
  # before_action :authorize_admin, only: [:create, :update, :destroy]

  def index
    farmers = Farmer.all
    render json: farmers
  end

  # # # retrieves a single farmer from the database by ID and assigns it to an instance variable to be used in the view.
  # # # GET /farmers/1
  def show
    farmers = Farmer.find_by(id: params[:id])
    if farmers
      render json: farmers
    else
      render json: { error: "Farmer not found" }, status: :not_found
    end

  end

  def update
    farmer = Farmer.find_by(id: params[:id])

    if farmer
      if farmer.update(farmer_params)
        render json: farmer.as_json(only: [:id, :username, :email])
      else
        render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Farmer not found" }, status: :not_found
    end
  end


  # # creates a new farmer object using the parameters submitted from the form.
  # # If the farmer creates successfully, the user is redirected to the farmer's show page with a success notice.
  # # If the farmer fails to create, the new form is rendered with the validation errors displayed.
  # # POST /farmers

  def create
      farmers = Farmer.create!(farmers_params)
      render json: farmers
      end
  end

  private

    def farmers_params
         params.permit(:username, :email)
    end


 


  
    private
  
    def farmer_params
      params.require(:farmer).permit(:username, :email)
    end



  #  deletes an existing farmer object from the database by ID.
  # The user is then redirected to the index page with a success notice.
  # DELETE /farmers/1
  # def destroy
  #   @farmer = Farmer.find(params[:id])
  #   @farmer.destroy
  #   redirect_to farmers_url, notice: 'Farmer was successfully destroyed.'
  # end

  # private

  # This is a private method that checks if the current user is an admin.
  # If the current user is not an admin, they are redirected to the root_url with an access denied alert.
  # def authorize_admin
  #   redirect_to root_url, alert: 'Access denied.' unless current_farmer.admin?
  # end

  # This is a private method that defines the permitted parameters for creating or updating a farmer.
  # This is a security measure to prevent malicious users from submitting unexpected parameters.
  # def farmer_params
  #   params.require(:farmer).permit(:username, :email)


