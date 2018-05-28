class TasksController < ApplicationController
  def index
    render json: Task.all.to_json
  end

  def create
    render json: Task.create(tasks_params)
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task
  end

  private
    def tasks_params
      params.require(:task).permit(:user_id, :text, :is_complete, :set_date)
    end
end
