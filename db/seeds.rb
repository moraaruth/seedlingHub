# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
# Create 30 seedlings
30.times do
  Seedling.create(
    name: Faker::Food.fruits,
    price: Faker::Commerce.price(range: 0..50.0, as_string: true),
    description: Faker::Food.description,
    farmer_id: rand(1..100),
    planting_season: Faker::Time.between_dates(from: Date.today, to: Date.today + 1.year),
    growth_duration: Faker::Number.between(from: 30, to: 180),
    harvest_time: Faker::Time.between(from: Time.now, to: Time.now + 6.months),
    soil_type: Faker::Hipster.word,
    water_requirements: Faker::Number.between(from: 1, to: 10),
    light_requirements: Faker::Number.between(from: 1, to: 10),
    nutritional_value: Faker::Number.between(from: 1, to: 5)
  )
end
# Create 5 farmers
2.times do
  Farmer.create(
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.unique.email,
    password_digest: Faker::Internet.password(min_length: 8, mix_case: true, special_characters: true)
  )
end
