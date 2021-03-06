Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'login', to: 'users#isLoggedIn'
  post 'login', to: 'users#login'
  delete 'logout', to: 'users#logout'
  resources :users

  get 'tasks/dates/:id', to: 'tasks#dates'
  get 'tasks/users/:id', to: 'tasks#userTasks'
  resources :tasks

  get 'events/dates/:id', to: 'events#dates'
  get 'events/users/:id', to: 'events#userEvents'
  resources :events

  get 'notes/dates/:id', to: 'notes#dates'
  get 'notes/users/:id', to: 'notes#userNotes'
  resources :notes

  get 'schedules/dates/:id', to: 'schedules#dates'
  get 'schedules/users/:id', to: 'schedules#userSchedule'
  resources :schedules
end
