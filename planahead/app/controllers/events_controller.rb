class EventsController < ApplicationController
  def index
    render json: Event.all.to_json
  end

  def create
    render json: Event.create(events_params).to_json
  end

  def update
    @event = Event.find(params[:id])
    @event.update(events_params)
    render json: @event.to_json
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: @event.to_json
  end

  def dates
    render json: Event.pluck(:set_date).uniq.to_json
  end

  private

    def events_params
      params.require(:event).permit(:user_id, :text, :set_date, :set_time)
    end
end
