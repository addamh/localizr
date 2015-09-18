class Api::V1::LanguagesController < ApplicationController
  before_action :set_language, only: [:show, :edit, :update, :destroy]

  # GET /stuffs
  # GET /stuffs.json
  def index
    @language = Language.all
  end

  # GET /stuffs/1
  # GET /stuffs/1.json
  def show
    render json: @language
  end

  # GET /stuffs/new
  def new
    @language = Language.new
  end

  # GET /stuffs/1/edit
  def edit
  end

  # POST /stuffs
  # POST /stuffs.json
  def create
    @language = Language.new(language_params)

    respond_to do |format|
      if @language.save
        format.json { render json: @language, status: :created}
      else
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stuffs/1
  # PATCH/PUT /stuffs/1.json
  def update
    respond_to do |format|
      if @language.update(localized_strings_params)
        format.json { render json: @language, status: :ok }
      else
        format.json { render json: @language.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stuffs/1
  # DELETE /stuffs/1.json
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
      params.require(:language).permit(:code, :app_id)
    end
end
