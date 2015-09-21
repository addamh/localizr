class Api::V1::LocalizedStringsController < ApplicationController
  before_action :set_localized_string, only: [:show, :edit, :update, :destroy]

  # GET /stuffs
  # GET /stuffs.json
  def index
    @localized_strings = LocalizedString.all
  end

  # GET /stuffs/1
  # GET /stuffs/1.json
  def show
    render json: @localized_string
  end

  # GET /stuffs/new
  def new
    @localized_string = LocalizedString.new
  end

  # GET /stuffs/1/edit
  def edit
  end

  # POST /stuffs
  # POST /stuffs.json
  def create
    @localized_string = LocalizedString.new(localized_strings_params)

    respond_to do |format|
      if @localized_string.save
        format.html { redirect_to @localized_string, notice: 'localized_string was successfully created.' }
        format.json { render json: @localized_string, status: :created}
      else
        format.html { render :new }
        format.json { render json: @localized_string.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stuffs/1
  # PATCH/PUT /stuffs/1.json
  def update
    respond_to do |format|
      if @localized_string.update(localized_strings_params)
        format.html { redirect_to @localized_string, notice: 'Localized String was successfully updated.' }
        format.json { render json: @localized_string, status: :ok }
      else
        format.html { render :edit }
        format.json { render json: @localized_string.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stuffs/1
  # DELETE /stuffs/1.json
  def destroy
    @localized_string.destroy
    respond_to do |format|
      format.html { redirect_to stuffs_url, notice: 'localized_string was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_localized_string
      @localized_string = LocalizedString.find(params[:id])
    end

    def localized_strings_params
      params.require(:localized_string).permit(:string_key, :string_value, :language_id, :notes, :country_code)
    end
end
