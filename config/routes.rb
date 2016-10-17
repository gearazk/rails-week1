Rails.application.routes.draw do
  resources :food_items
  get 'menu' => 'home#menu'
  get 'contact' => 'home#contact_us'
  get 'order' => 'home#order'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
