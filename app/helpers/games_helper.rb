module GamesHelper

  def list_capital_question(state)
    "What is the capital of " + @all_us_states_info.where(state: state).first.state + "?"
  end

  def display_answer_options(capital)
    answer_options_array = @capitals_array.shuffle.first(3) << capital
    answer_options_array.shuffle 
  end
  
end
