require 'test_helper'

class SsrControllerTest < ActionDispatch::IntegrationTest
  test "should get render" do
    get ssr_render_url
    assert_response :success
  end

end
