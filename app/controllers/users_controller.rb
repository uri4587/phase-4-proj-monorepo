class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index 
        users = User.all 
        render json: users, status: :ok
    end

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

private
    def user_params
        params.permit(:name, :email, :password, :username)
    end
    def render_invalid_record_response(invalid)
        render json: {errors: [invalid.record.errors.full_messages]}, status: :unprocessable_entity
    end

    def render_record_not_found_response(invalid)
        render json: {error: invalid}, status: :not_found
    end


end
