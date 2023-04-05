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
    resources :farmers, only: [:index, :show, :create, :destroy]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end