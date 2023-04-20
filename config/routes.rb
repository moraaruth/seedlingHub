Rails.application.routes.draw do
  
  resources :farmers, only: [:index, :create, :show, :update, :destroy]
  resources :seedlings, only: [:index, :create, :show ]
  post '/authenticate',    to: 'farmers#create'
  delete '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#create'
  get '/me', to: 'farmer#show'
  # get '/farmers', to: '/farmers#index'
end
  




