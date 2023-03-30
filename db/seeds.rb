# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
    Seedling.create(
      name: Faker::Food.ingredient,
      price: Faker::Number.decimal(l_digits: 2),
      description: Faker::Food.description
    )
end

10.times do
    Consumer.create(
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password_digest: 'password'
    )
end

10.times do
    Farmer.create(
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password_digest: 'password'
    )
end