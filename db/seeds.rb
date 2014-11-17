# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require "open-uri" #gets HTML from a site

link = open("http://en.wikipedia.org/wiki/List_of_capitals_in_the_United_States")
#opening link to be scraped

doc = Nokogiri::HTML(link)

#puts doc

#everything below here can be deleted and above code replicated for another scrape
game_table = doc.css("table:nth-of-type(0) tr") #table:nth-of-type(6) = 6th table down from top

#puts game_table

game_table.shift

game_table.each do |game_row|
    state = game_row.css("td:nth-of-type(1)").text
    capital = game_row.css("td:nth-of-type(4)").text
    statehood = game_row.css("td:nth-of-type(3)").text

    game_params = {
      state: state,
      capital: capital,
      statehood: statehood,
    }
    Game.create(game_params)
    #puts game_params
end
