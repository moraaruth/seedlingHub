class ConsumersController < ApplicationController
    def index
        consumers = Consumer.all
        render json: consumers
    end
end
