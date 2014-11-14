#to test rspec, run in terminal from root folder ("road trip"): rspec

require 'rails_helper'
require 'spec_helper'


feature 'welcome page registration' do
  scenario 'welcomes the user & requires sign in, registration or play' do

    visit '/'
    expect(page.find('h1')).to have_content("Road Trip")
    expect(page).to have_link("Register")
    expect(page).to have_link("Log in")
    expect(page).to have_link("Play")
  end

  scenario "user clicks on register and goes to registration page" do
    visit '/'
    click_link 'Register'
    expect(current_path).to eq(new_user_registration_path)

  end

  scenario "user clicks on Log in and goes to log in page" do
    visit '/'
    click_link 'Log in'
    expect(current_path).to eq(new_user_session_path)

  end

  scenario "user clicks on register and goes to play page" do
    visit '/'
    click_link 'Play'
    expect(current_path).to eq(games_index_path)

  end

end

# scenario "user can visit the root page and see links to sign in or register." do
#     visit root_path
#     expect(page).to have_link('Register')
#     click_link 'Register'
#     expect(current_path).to eq(new_user_path)
#     expect(page).to have_content("Register Your Metacog Account")
