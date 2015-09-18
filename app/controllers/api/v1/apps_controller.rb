class Api::V1::AppsController < ApplicationController
  def index
    render json: App.all
  end

  def show
    render json: App.first
  end

  def create
    @app = App.new(app_params)

    respond_to do |format|
      if @app.save
        format.json { render json: @app, status: :created}
      else
        format.json { render json: @app.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_app
      @app = App.find(params[:id])
    end

    def app_params
      params.require(:app).permit(:name)
    end
end
