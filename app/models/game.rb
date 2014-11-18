class Game < ActiveRecord::Base

  def self.north_route(index)
    ["California", "Arizona", "New Mexico", "Texas", "Oklahoma", "Arkansas", "Tennessee", "North Carolina"][index]
  end
end
