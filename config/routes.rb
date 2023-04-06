
Rails.application.routes.draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :farmers, only: [:index, :show, :create, :update, :destroy]
    post "/signup", to: "farmers#create"
    get "/me", to: "farmers#show"
    post "/login", to: "sessions#create"
   
    get '/login', to: 'sessions#new'
    # post "/login", to: "farmers#index"
    delete "/logout", to: "sessions#destroy"
  end