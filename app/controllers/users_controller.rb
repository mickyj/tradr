class UsersController < ApplicationController

  def index
    @users = User.all
  end


  def new
    @user = User.new
  end



  def create
    User.create(params[:user])
    @users = User.order(:email)
    respond_to do |format|
      format.html {redirect_to(users_path)} #it can handle the html case
      format.js {render :create}  #javascript is fine goest o find create.js so it goes to the create.js file
    end
  end


end


