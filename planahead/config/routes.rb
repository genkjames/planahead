Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'tasks/dates', to: 'tasks#dates'
  resources :tasks

  get 'events/dates', to: 'events#dates'
  resources :events
end
