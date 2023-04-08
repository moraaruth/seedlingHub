
class FarmersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


before_action :require_login, except: [:create]


def index
  farmers = Farmer.all
    if farmers
        render json: farmers
    else
        render json: {
        status: 500,
        errors: ['no farmers found']
    }
    end

end

def show
       farmers = Farmer.find(params[:id])
           if farmers
              render json: {
              farmers: farmers
           }
           else
              render json: {
              status: 500,
              errors: ['farmer not found']
            }
    end
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
      farmer = Farmer.find_by(id: params[:id])
  
      if farmer
        if farmer.update(farmer_params)
          render json: farmer.as_json(only: [:id, :username])
        else
          render json: { errors: farmer.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: "Farmer not found" }, status: :not_found
      end
    end

    def destroy
      logout!
      @farmer = Farmer.find(params[:id])
      @farmer.destroy
      render json: { message: "Farmer deleted and user logged out" }
    end
  


private

def find_farmer
  Farmer.find(params[:id])
end

def render_not_found_response
  render json: { error: 'Not found' }, status: :not_found
end
      
     def farmer_params
         params.require(:farmer).permit(:username, :password, :password_confirmation)
     end

     def require_login
        unless logged_in?
          render json: {
            status: 401,
            errors: ['You must be logged in to access this section']
          }
        end
      end
end