class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :state
      t.string :capital
      t.integer :statehood

      t.timestamps
    end
  end
end
