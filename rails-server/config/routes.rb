Rails.application.routes.draw do
  defaults format: :html do
    root 'ssr#render_react'
    get '*path' => 'ssr#render_react'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
