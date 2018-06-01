class SchedulesController < ApplicationController
  before_action :ensure_signed_in

  def index
    render json: Schedule.all.to_json
  end

  def userSchedule
    render json: Schedule.where("user_id = ?", params[:id]).to_json
  end

  def create
    render json: Schedule.create(schedules_params).to_json
  end

  def update
    @schedule = Schedule.find(params[:id])
    @schedule.update(schedules_params)
    render json: @schedule.to_json
  end

  def destroy
    @schedule = Schedule.find(params[:id])
    @schedule.destroy
    render json: @schedule.to_json
  end

  def dates
    render json: Schedule.where("user_id = ?", params[:id]).pluck(:set_date).uniq.to_json
  end

  private

    def schedules_params
      params.require(:schedule).permit(:user_id, :text, :set_date, :set_time)
    end
end
