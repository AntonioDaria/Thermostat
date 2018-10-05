require 'sinatra/base'

class App < Sinatra::Base
  enable :sessions

  get '/' do
    p session
    erb :index
  end

  post '/' do
    p params
    session[:thermo_temp]
    session[:current_temp]
    session[:p_mode]
    redirect('/')
  end

  run! if app_file == $0

end
