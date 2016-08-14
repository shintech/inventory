10.times do |x|
  User.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, email: Faker::Internet.safe_email, username: Faker::Internet.user_name)
end

userid = 1

10.times do |x|
  Device.create(name: "iPad", serial_number: Faker::Number.number(10), user_id: userid)
  userid += 1
end