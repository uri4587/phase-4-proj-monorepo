Rails.application.routes.draw do
  resources :tasks
  resources :categories
  resources :users
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "session#login"
  
  get '/authorized_user', to: 'session#get_current_user'

  delete '/logout', to: 'session#logout'


end
