class GamesController < ApplicationController

  def index
    @states = Game.all
  end


end
