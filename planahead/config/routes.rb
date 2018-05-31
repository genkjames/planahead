Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'login', to: 'users#isLoggedIn'
  post 'login', to: 'users#login'
  delete 'logout', to: 'users#logout'
  resources :users

  get 'tasks/dates/:id', to: 'tasks#dates'
  get 'tasks/users/:id', to: 'tasks#userTasks'
  resources :tasks

  get 'events/dates', to: 'events#dates'
  resources :events
end
