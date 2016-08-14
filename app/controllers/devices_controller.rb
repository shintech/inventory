class DevicesController < ApplicationController
  
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format.include? 'application/json' }

  def index
    @devices = Device.all
    respond_to do |format|
      format.json { render json: @devices }
    end
  end
  
  def show
    @device = Device.find(params[:id])
    respond_to do |format|
      format.json { render json: @device }
    end
  end
  
  def create
    @device = Device.create(device_params)
  end
  
  private
  
  def device_params
    params.require(:device).permit(:name, :serial_number)
  end
end
