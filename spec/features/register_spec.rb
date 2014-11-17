require 'rails_helper'
require 'spec_helper'


feature 'registration page functionality' do
  scenario 'when a user clicks Register' do

    visit '/users/sign_up'
    expect(page).to have_content("Register")
    expect(page).to have_field("Username")
    expect(page).to have_field("Email")
    expect(page).to have_field("Password")
    expect(page).to have_field("Password confirmation")
  end

end
