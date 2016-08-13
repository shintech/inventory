Rails.application.routes.draw do
  get 'users/:id' => 'users#show'
  get "users" => "users#index"
  post "user" => "users#create"
  root to: 'application#index'
end
