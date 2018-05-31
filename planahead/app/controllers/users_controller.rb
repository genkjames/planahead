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
    p 'called'
    p user_id
    p payload
    JWT.encode(payload, ENV["SECRET_KEY_BASE"])
  end

  def create
    @user =  User.new(user_params)

    if @user.save
      render json: {
        id: @user.id,
        username: @user.username,
        email: @user.email
      }.to_json
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  def is_logged_in
    if current_user
      render json: current_user
    else render nothing: true, status: 401
    end
  end

  def login
    user = User.find_by(email: params[:session][:email].downcase)

    if user && user.authenticate(params[:session][:password])
      render json: {user: user, token: gen_token(user.id)}
    else
      render json: {errors: {message: 'Invalid username and/or password'}}
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
