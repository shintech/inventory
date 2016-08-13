Rails.application.routes.draw do
  get 'user/:id' => 'users#show'
  get "users" => "users#index"
  post "user" => "users#create"
  root to: 'application#index'
end
