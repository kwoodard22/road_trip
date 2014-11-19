class MessagesController < ApplicationController
  def index
    @user = current_user
    @sent_messages = @user.sent_messages
    @received_messages = @user.received_messages
  end
  
  def show
    @message = Message.find(params[:id])
  end

  def new
    @message = current_user.sent_messages.build
    @users= User.all
  end

  def create
    @users = User.all
    @message = current_user.sent_messages.build(message_params)
    if @message.save
      flash[:success] = "Successfully sent!"
      redirect_to user_messages_path(current_user)
    else
      flash[:error] = "Whoops, something went wrong..."
      render 'new'
    end
  end

  def edit
    @message = Message.find(current_user)
  end

  def update
    @user = User.find(current_user)
    @message = Message.update(message_params)

    if @message.save
      redirect_to user_message_path(user_id: @user.id)
    else
      render 'edit'
    end
  end

  def destroy
    @message = Message.find(params[:id]).destroy
    flash[:success] = "Successfully deleted..."
    redirect_to user_messages_path(user_id: current_user.id)
  end

   private

  def message_params
    params.require(:message).permit(:recipient_id, :title, :body).merge(sender_id: current_user.id)
  end
end
