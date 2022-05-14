class SessionController < ApplicationController


    # def create

    #     user_to_find = User.find_by(params[:username])

    #     if user_to_find
    #         if user_to_find.authenticate(params[:password])
    #             session[:user_id] = user_to_find.id
    #             render json: user_to_find, status: :ok
    #         else  
    #         render json: {error: "Check Your Password"}

    #         end

    #     else render json: {error: "Username or Password Does Not Match"}

    #     end
    # end

    def login
        user = User.find_by(username: params[:username])
        
        if user&.authenticate(params[:password])

            # Group Activity => 
                # - Set Session's 'current_user' to User's ID
                session[:current_user] = user.id
                # - Set Session's 'login_attempts' to 0
                # session[:login_attempts] = 0 

            render json: user, status: :ok
        else
            render json: { error: "Invalid Password and/or Username"},  status: :unauthorized
        end
    end

    def get_current_user
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end

    def logout
        session.delete :current_user
    end
    
end
