Rails.application.routes.draw do
  get 'users/:id' => 'users#show'
  get "users" => "users#index"
  post "users" => "users#create"
  root to: 'application#index'
end
