require 'rails_helper'
require 'spec_helper'

feature 'welcome/signup page' do
  scenario 'welcomes the user & requires signin' do

    visit '/'
    expect(page.find('h1')).to have_content(/Road Trip/)
    expect(page).to have_content("Register")
    expect(page).to have_content("Sign In")
    expect(page).to have_content("Play")

    click_on 'Register'

    expect(current_path).to eq(new_user_registration_path)

  end
end
