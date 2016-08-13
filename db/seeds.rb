10.times do |x|
  User.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, email: Faker::Internet.safe_email, username: Faker::Internet.user_name)
end
