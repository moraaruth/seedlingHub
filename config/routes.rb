# Rails.application.routes.draw do

# post '/login',    to: 'sessions#create'
# post '/logout',   to: 'sessions#destroy'
# get '/logged_in', to: 'sessions#is_logged_in?'
# resources :seedlings
# resources :farmers, only: [:create, :show, :index, :destroy] do 

#  end

# end
Rails.application.routes.draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :farmers, only: [:index, :show, :create, :update, :destroy]
    post "/signup", to: "farmers#create"
    get "/me", to: "farmers#show"
    # post "/login", to: "sessions#create"
    # delete "/logout", to: "sessions#destroy"
  end