class AddSenderIdToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :sender_id, :integer
    add_column :messages, :recipient_id, :integer,  null: false 
    add_column :messages, :title, :string
    add_column :messages, :body, :text, null: false
  end
end
