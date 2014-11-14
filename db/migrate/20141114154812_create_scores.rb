class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.belongs_to :user, index: true
      t.integer :score

      t.timestamps
    end
  end
end
