# frozen_string_literal: true

module ApplicationHelper
  def display_user_email
    user_signed_in? ? current_user.email : 'Sign in'
  end
end
