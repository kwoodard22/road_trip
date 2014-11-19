class GamesController < ApplicationController

  def index
    @all_us_states_info = Game.all
    @state = Game.north_route(0)
    @capital = Game.where(state: @state).first.capital
    @capitals_array = Game.create_html_array(@capital)   
    session[:stop] = 0
  end

  def next_state
    state = Game.north_route(params[:stop_num].to_i)
    capital = Game.where(state: state).first.capital
    options_array = Game.create_jq_array(state, capital)
    respond_to do |format|
       format.html
       format.json { render json: {
          state: state,
          capital: capital,
          options: options_array.shuffle 
          }}
    end    
    # the_end = Game.check_if_end
  end
 
end
