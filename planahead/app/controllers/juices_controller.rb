class JuicesController < ApplicationController
  def index
    render json: {
      juices: [
        {name: 'wheatgrass'},
        {name: 'jungle juice'},
        {name: 'orange juice'}
      ]
    }.to_json
  end
end
