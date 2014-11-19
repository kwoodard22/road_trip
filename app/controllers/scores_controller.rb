class ScoresController < ApplicationController
  def index
    @scores = Score.all.order("score DESC").limit(10)
  end

  def create
    if user_signed_in?
      score = current_user.scores.new(score_params)
      if score.save
        respond_to do |format|
          format.json { render text: { score: score.score }.to_json, status_code: 200 }
        end
      else
        respond_to do |format|
          format.json { render text: { errors: score.errors.full_messages, status_code: 402 }.to_json }
        end
      end
    else
      render text: "Not saved.  Not signed in.", status_code: 200
    end
  end


  private

  def score_params
    params.require(:score).permit(:score)
  end

end
