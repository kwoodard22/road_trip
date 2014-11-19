class Game < ActiveRecord::Base

  def self.north_route(index)
    ["California", "Arizona", "New Mexico", "Texas", "Oklahoma", "Arkansas", "Tennessee", "North Carolina"][index]
  end

  # def self.check_if_end
  #   if Game.north_route(params[:stop_num].to_i) == "North Carolina" # should be lenght of .north_route
  #     true
  #   else
  #     false
  #   end
  # end

  def self.create_html_array(capital)
    capitals_array = []
    Game.all.each {|s| capitals_array << s.capital }
    capitals_array.delete(capital)
    capitals_array.shuffle.first(3)
  end

  def self.create_jq_array(state, capital)
    capitals_array = []
    Game.all.each {|s| capitals_array << {capital: s.capital, html_class: "option" } }
    capitals_array.delete({capital: capital, html_class: "option" })
    capitals_array.shuffle.first(3) << {capital: capital, html_class: "answer" }
  end 

end
