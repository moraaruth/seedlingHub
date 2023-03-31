Rails.application.routes.draw do
  resources :seedlings
  resources :farmers, only: [:index, :create, :show, :update, :destroy]
  resources :consumers, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
