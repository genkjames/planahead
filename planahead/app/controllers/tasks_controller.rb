class TasksController < ApplicationController
  before_action :ensure_signed_in

  def index
    render json: Task.all.to_json
  end

  def userTasks
    render json: Task.where("user_id = ?", params[:id]).to_json
  end

  def create
    render json: Task.create(tasks_params).to_json
  end

  def update
    @task = Task.find(params[:id])
    @task.update(tasks_params)
    render json: @task.to_json
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task.to_json
  end

  def dates
    render json: Task.where("user_id = ?", params[:id]).pluck(:set_date).uniq.to_json
  end

  private

    def tasks_params
      params.require(:task).permit(:user_id, :text, :is_complete, :set_date)
    end
end
