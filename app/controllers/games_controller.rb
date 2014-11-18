class GamesController < ApplicationController

  def index
    @all_us_states_info = Game.all
    @state = Game.north_route(0)
    capital = Game.where(state: @state).first.capital
    capitals_array = []
    @all_us_states_info.each {|s| capitals_array << s.capital }
    capitals_array.delete(@capital)
    @capitals_array = capitals_array
    session[:stop] = 0
  end

  def next_state
    state = Game.north_route(params[:stop_num].to_i)
    capital = Game.where(state: state).first.capital
    respond_to do |format|
         format.html
         format.json { render json: {
            state: state,
            capital: capital,
            }}
       end
  end

end
