class SessionsController < ApplicationController
  # def generate_token(user_id)
  #   payload = {id: user_id}
  #   JWT.encode(payload, Rails.application.secrets.secret_key_base)
  # end

  # def create
  #   user = User.find_by(email: params[:session][:email].downcase)

  #   if user && user.authenticate(params[:session][:password])

  #     render json: user.to_json
  #   else
  #     render json: {errors: {message: 'Invalid username and/or password'}}
  #   end
  # end

  def destroy
  end
end
