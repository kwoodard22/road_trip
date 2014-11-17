class ScoresController < ApplicationController
  def index
    @scores = Score.all.order("score DESC").limit(10)
  end

end
