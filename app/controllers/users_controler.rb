post "/users" do
	@user = User.new(params[:user])
	@user.password = params[:password]

	if @user.save
		session[:user_id] = @user.id
		redirect "/users/#{@user.id}"
	else
		@errors = @user.errors.full_messages
		erb :"users/new" 
	end
end

get "/users/new" do
	@errors = nil
	erb :"users/new"
end

get "/users/:user_id/edit" do
	logged_in?
	@user = User.find(params[:user_id])
	if @user_id == current_user.id
		erb :"users/edit"
	else
		redirect "users/#{current_user.id}/edit"
	end
end

put "/users/:user_id" do
	@user = User.find(params[:user_id])
	@user.assign_attributes(params[:user])

	if @user.save
		redirect "/users/#{@user.id}"
	else
		@errors = @user.errors.full_messages
		erb :"users/edit"
	end

end



