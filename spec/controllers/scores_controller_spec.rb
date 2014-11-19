require 'rails_helper'

RSpec.describe ScoresController, :type => :controller do

  describe "GET index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  context 'without an authenticated user' do
    describe "POST create" do

      it "returns http success" do
        post :create, { score: { score: 3 }, format: :json }
        expect(response).to have_http_status(:success)
      end
    end
  end

  context 'with an authenticated user' do
    before :each do
      # authenticate user
      sign_in User.create!(
        username: 'tester',
        password: 'password', 
        password_confirmation: 'password',
        email: 'tester@example.com')
    end

    describe "POST create" do

      it "returns http success" do
        post :create, { score: { score: 4 }, format: :json }
        expect(response).to have_http_status(:success)
      end
    end
  end

end
