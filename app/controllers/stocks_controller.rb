class StocksController < ApplicationController
  before_filter :only_authorized

  def index
    # @stocks = @auth.stocks.order(:activity).order(:completed)
    @stocks = @auth.stocks.uniq.sort
    @stock = Stock.new
  end

  def chart
    symbols = params[:charts]

    result = YahooFinance::get_HistoricalQuotes_days( symbols, 30 )

    render :json => result
  end

  # def new
  #   @stock = Stock.new
  # end


  def create
    if @auth.has_enough_money?(params[:stock][:symbol], params[:stock][:shares])
       @auth.purchase(params[:stock][:symbol], params[:stock][:shares])

       @stocks = @auth.stocks


  end
end




  private

    def only_authorized
      redirect_to(root_path) if @auth.nil?
    end




 end







