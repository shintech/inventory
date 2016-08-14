Rails.application.routes.draw do
  get 'users/:id' => 'users#show'
  get "users" => "users#index"
  post "users" => "users#create"
  
  get 'devices/:id' => 'devices#show'
  get "devices" => "devices#index"
  post "devices" => "devices#create"
  
  root to: 'application#index'
end
