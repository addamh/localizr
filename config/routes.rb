Rails.application.routes.draw do
  get :csrf, to: 'csrf#index'
  namespace :api do
    namespace :v1 do
      get :csrf, to: 'csrf#index'
      resources :apps
      resources :languages
      resources :localized_strings, path: '/strings'
    end
  end
end
