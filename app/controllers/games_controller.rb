class GamesController < ApplicationController

  def index
    @all_us_states_info = Game.all
    @state = Game.north_route(0)
    @capital = Game.where(state: @state).first.capital
    # Collects all the other capitals
    capitals_array = []
    @all_us_states_info.each {|s| capitals_array << s.capital }
    capitals_array.delete(@capital)
    @capitals_array = capitals_array.shuffle.first(3) << @capital
    session[:stop] = 0
  end

  def next_state
    state = Game.north_route(params[:stop_num].to_i)
    capital = Game.where(state: state).first.capital
    capitals_array = []
    Game.all.each {|s| capitals_array << {capital: s.capital, html_class: "option" } }
    capitals_array.delete({capital: capital, html_class: "option" })
    options_array = capitals_array.shuffle.first(3) << {capital: capital, html_class: "answer" }
    respond_to do |format|
       format.html
       format.json { render json: {
          state: state,
          capital: capital,
          options: options_array.shuffle 
          }}
    end    
  end

end
