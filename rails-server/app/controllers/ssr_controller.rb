class SsrController < ApplicationController
  around_action :hypernova_render_support

  def render_react; end
end
