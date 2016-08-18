class UsersController < ApplicationController
  
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format.include? 'application/json' }

  def index
    @users = User.all
    respond_to do |format|
      format.json { render json: @users }
    end
  end
  
  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.json { render json: @user }
    end
  end
  
  def create
    @user = User.new(user_params)
      if @user.save
        respond_to do |format|
          format.json { render nothing: true }
      end
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :username)
  end
end
