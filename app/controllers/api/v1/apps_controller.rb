class Api::V1::AppsController < ApplicationController
  def index
    render json: App.all
  end

  def show
    render json: App.first
  end
end
