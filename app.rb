require 'sinatra/base'

class App < Sinatra::Base

  get '/' do
    erb :index
  end

  post '/' do
    p params
    session[:thermo_temp]
    session[:p_mode]
    session[:current_temp]
  end

  run! if app_file == $0

end
