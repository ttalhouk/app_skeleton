helpers do
	def logged_in?
		redirect '/login' unless session[:user_id]
	end

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

   def login
    @user = User.find_by(username: params[:user][:username])
    if @user.password == params[:user][:password_hash]
      session[:id] = @user.id
      redirect "/user/#{@user.id}"
    else
      @errors = @user.errors.full_messages
      erb :'/login/new'
    end
  end
end