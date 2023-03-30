# In the SessionsController, handle logging in and logging out
class SessionsController < ApplicationController
    def new
    end
  
    def create
      # Find the farmer with the email provided in the form
      farmer = Farmer.find_by(email: params[:session][:email])
      # If the farmer exists and their password matches the one provided in the form
      if farmer && farmer.authenticate(params[:session][:password])
        # Store the farmer's ID in the session
        session[:farmer_id] = farmer.id
        # Redirect to the root page
        redirect_to root_path
      else
        # If the login information is invalid, display an error message and render the login form again
        flash.now[:danger] = 'Invalid email/password combination'
        render 'new'
      end
    end
  
    def destroy
      # Set the farmer ID in the session to nil to log the user out
      session[:farmer_id] = nil
      # Redirect to the root page
      redirect_to root_path
    end
  end
  