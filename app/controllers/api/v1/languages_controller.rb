class Api::V1::LanguagesController < ApplicationController
  before_action :set_language, only: [:show, :edit, :update, :destroy]

  def index
    @language = Language.all
  end

  def show
    render json: @language
  end

  def new
    @language = Language.new
  end

  def edit
  end

  def create
    @language = Language.new(language_params)
    @current_primary = Language.where(app_id: language_params[:app_id], primary: true).first
    if @current_primary
      @current_primary.localized_strings.each do |s|
        @language.localized_strings << LocalizedString.new({string_key: s.string_key, notes: s.notes})
      end
    end

    respond_to do |format|
      if @language.save
        format.json { render json: @language, status: :created}
      else
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      @current_primary = Language.where(app_id: language_params[:app_id], primary: true).first
      @current_primary.primary = false

      if @language.update(language_params)
        @current_primary.save
        format.json { render json: @language, status: :ok }
      else
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @language.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_language
      @language = Language.find(params[:id])
    end

    def language_params
      params.require(:language).permit(:code, :app_id, :primary, :country_code)
    end
end
