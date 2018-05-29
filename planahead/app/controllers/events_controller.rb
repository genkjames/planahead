class EventsController < ApplicationController
  def index
    render json: Event.all.to_json
  end

  def create
    render json: Event.create(events_params).to_json
  end

  private
    def events_params
      params.require(:event).permit(:user_id, :text, :set_datetime)
    end
end
