# In the FarmersController, require that a user is logged in before accessing any actions
class FarmersController < ApplicationController
    before_action :require_login, except: [:new, :create]
    before_action :require_admin, only: [:index, :destroy]

  def index
    # ...
  end

  def destroy
    # ...
  end

  private

  def require_admin
    # If the user is not an admin, display an error message and redirect to the root page
    if current_farmer && !current_farmer.admin?
      flash[:danger] = "You must be an admin to access this section"
      redirect_to root_path
    end
  end
end
