class NotesController < ApplicationController
  before_action :ensure_signed_in

  def index
    render json: Note.all.to_json
  end

  def userNotes
    render json: Note.where("user_id = ?", params[:id]).to_json
  end

  def create
    render json: Note.create(notes_params).to_json
  end

  def update
    @note = Note.find(params[:id])
    @note.update(tasks_params)
    render json: @note.to_json
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render json: @note.to_json
  end

  def dates
    render json: Note.where("user_id = ?", params[:id]).pluck(:set_date).uniq.to_json
  end

  private

    def notes_params
      params.require(:note).permit(:user_id, :text, :set_date)
    end
end
