require 'rails_helper'
require 'spec_helper'


feature 'log-in page functionality' do
  scenario 'when a user clicks Log-in' do

    visit '/users/sign_in'
    expect(page).to have_field("Email")
    expect(page).to have_field("Password")
  end

  scenario "user clicks on forgot your password" do
    click_link "Forgot your password?"
    visit '/users/password/new'
    expect(current_path).to eq(new_user_password_path)

  end

end
