class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    render json: {
      id: @user.id,
      username: @user.username,
      email: @user.email
    }.to_json
  end

  def gen_token(user_id)
    payload = {id: user_id}
    JWT.encode(payload, ENV["SECRET_KEY_BASE"])
  end

  def create
    @user =  User.new(user_params)

    if @user.save
      render json: {
        user: {
          id: @user.id,
          username: @user.username,
          email: @user.email
        },
        token: gen_token(@user.id)
      }.to_json
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  def isLoggedIn
    if current_user
      render json: {
        id: current_user.id,
        username: current_user.username,
        email: current_user.email
      }.to_json
    else render json: ""
    end
  end

  def login
    user = User.find_by(email: params[:session][:email].downcase)

    if user && user.authenticate(params[:session][:password])
      render json: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        },
        token: gen_token(user.id)
      }.to_json
    else
      render json: {errors: {message: 'Invalid username and/or password'}}
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
