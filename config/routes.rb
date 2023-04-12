

Rails.application.routes.draw do
  
  # with authorization : i.e from step
  # resources :seedlings, only: [:index]
  resources :farmers, only: [:index, :create, :show, :update, :destroy]
  # get '/farmers/:id/seedlings', to: 'farmers#seedlings'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  end
  
# config/routes.rb


