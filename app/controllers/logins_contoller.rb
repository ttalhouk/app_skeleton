get "/login" do
		@errors = nil
		erb :"login/new"
end

post "/login" do
    @user = User.find_by(username: params[:user][:username])
    if @user.password == params[:user][:password_hash]
      session[:id] = @user.id
      redirect "/user/#{@user.id}"
    else
      @errors = @user.errors.full_messages
      erb :'logins/new'
    end

end

get '/logout' do
	session.clear
	redirect '/'
end
