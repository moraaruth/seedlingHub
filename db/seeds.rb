# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

5.times do
  Seedling.create(
    name: Faker::Food.ingredient,
    price: Faker::Commerce.price(range: 0..50.0, as_string: true),
    description: Faker::Food.description,
    farmer_id: rand(1..100) 
  )
end



5.times do
  Farmer.create(
    username: Faker::Name.unique.name,
    email: Faker::Internet.unique.email,
    password_digest: Faker::Internet.password(min_length: 8)
  )
end

5.times do
  Consumer.create(
    username: Faker::Internet.unique.username(specifier: 3..8),
    email: Faker::Internet.unique.email,
    password_digest: Faker::Internet.password(min_length: 8)
  )
end

