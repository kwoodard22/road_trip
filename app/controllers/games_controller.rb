class GamesController < ApplicationController

  def index
    @all_us_states_info = Game.all
    @route = ["California", "Arizona", "Connecticut"]
    @state = Game.where(state: @route.first).first.state
    @capital = Game.where(state: @route.first).first.capital
    # Need to figure out how to put this in the model!!
    capitals_array = []
    @all_us_states_info.each {|s| capitals_array << s.capital }
    capitals_array.delete(@capital)
    @capitals_array = capitals_array
  end


end
