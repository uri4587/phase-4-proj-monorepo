class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index 
        tasks = Task.all 
        render json: tasks, status: :ok
    end

    def show 
        task = Task.find(params[:id])
        render json: task, status: :ok
    end

    def create
       
        category = Category.find_by_name(params[:category][:name])
        params[:category_id] = category.id
        params[:user_id] = User.first.id
        task = Task.create(task_params)
        byebug
        render json: task, status: :ok
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        # head :no_content
        render json: task
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task
    end

private
    def task_params
        params.permit(:text, :completed, :date_to_complete, :user_id, :category_id)
    end
    def render_invalid_record_response(invalid)
        render json: {errors: [invalid.record.errors]}, status: :unprocessable_entity
    end

    def render_record_not_found_response(invalid)
        render json: {error: invalid}, status: :not_found
    end
end
