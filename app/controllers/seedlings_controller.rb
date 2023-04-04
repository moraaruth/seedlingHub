class SeedlingsController < ApplicationController
    
    def index
        seedlings = Seedling.all
        render json: seedlings
    end
end
