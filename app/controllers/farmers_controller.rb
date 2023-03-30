class FarmersController < ApplicationController
   #  sets up an authorization filter that requires the user to be an admin to perform certain actions.
  before_action :authorize_admin, only: [:new, :create, :edit, :update, :destroy]

  # retrieves all farmers from the database and assigns them to an instance variable to be used in the view.
  # GET /farmers
  def index
    @farmers = Farmer.all
  end

  # retrieves a single farmer from the database by ID and assigns it to an instance variable to be used in the view.
  # GET /farmers/1
  def show
    @farmer = Farmer.find(params[:id])
  end

  # sets up a new Farmer object to be used in the view for creating a new farmer.
  # GET /farmers/new
  def new
    @farmer = Farmer.new
  end

  # retrieves a single farmer from the database by ID and assigns it to an instance variable to be used in the view for editing.
  # GET /farmers/1/edit
  def edit
    @farmer = Farmer.find(params[:id])
  end

  # creates a new farmer object using the parameters submitted from the form.
  # If the farmer saves successfully, the user is redirected to the farmer's show page with a success notice.
  # If the farmer fails to save, the new form is rendered with the validation errors displayed.
  # POST /farmers
  def create
    @farmer = Farmer.new(farmer_params)

    if @farmer.save
      redirect_to @farmer, notice: 'Farmer was successfully created.'
    else
      render :new
    end
  end

  #updates an existing farmer object using the parameters submitted from the form.
  # If the update is successful, the user is redirected to the farmer's show page with a success notice.
  # If the update fails, the edit form is rendered with the validation errors displayed.
  # PATCH/PUT /farmers/1
  def update
    @farmer = Farmer.find(params[:id])

    if @farmer.update(farmer_params)
      redirect_to @farmer, notice: 'Farmer was successfully updated.'
    else
      render :edit
    end
  end

  #  deletes an existing farmer object from the database by ID.
  # The user is then redirected to the index page with a success notice.
  # DELETE /farmers/1
  def destroy
    @farmer = Farmer.find(params[:id])
    @farmer.destroy
    redirect_to farmers_url, notice: 'Farmer was successfully destroyed.'
  end

  private

  # This is a private method that checks if the current user is an admin.
  # If the current user is not an admin, they are redirected to the root_url with an access denied alert.
  def authorize_admin
    redirect_to root_url, alert: 'Access denied.' unless current_farmer.admin?
  end

  # This is a private method that defines the permitted parameters for creating or updating a farmer.
  # This is a security measure to prevent malicious users from submitting unexpected parameters.
  def farmer_params
    params.require(:farmer).permit(:name, :email, :password, :password_confirmation)
  end
end
