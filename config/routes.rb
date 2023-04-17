Rails.application.routes.draw do
  
  resources :farmers, only: [:index, :create, :show, :update, :destroy]
  resources :seedlings, only: [:index, :create, :show ]
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
end
  




