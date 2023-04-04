Rails.application.routes.draw do
#   resources :seedlings
#   resources :farmers, only: [:index, :create, :show, :update, :destroy]
#   resources :consumers, only: [:index, :show]
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"

# end

post '/login',    to: 'sessions#create'
post '/logout',   to: 'sessions#destroy'
get '/logged_in', to: 'sessions#is_logged_in?'
resources :farmers, only: [:create, :show, :index] do 
    # resources :items, only: [:create, :show, :index, :destroy]
 end

end