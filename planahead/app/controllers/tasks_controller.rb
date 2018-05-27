class TasksController < ApplicationController
  def index
    render json: Task.all.to_json
  end

  def create
    render json: Task.create(tasks_params)
  end

  private
    def tasks_params
      params.require(:task).permit(:user, :task, :is_complete, :date)
    end
end
