class Message < ActiveRecord::Base
  belongs_to :sender, class_name: 'User', primary_key: :sender_id
  belongs_to :recipient, class_name: 'User', primary_key: :recipient_id

  # validates_presence_of :sender_id, :recipient_id, :email, :body
  validates_presence_of :body
end
