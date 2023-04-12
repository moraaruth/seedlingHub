# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_10_120837) do
  create_table "farmers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "seedling_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["seedling_id"], name: "index_farmers_on_seedling_id"
  end

  create_table "seedlings", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "price", precision: 10, scale: 2, null: false
    t.text "description", null: false
    t.datetime "planting_season", null: false
    t.integer "growth_duration", null: false
    t.datetime "harvest_time", null: false
    t.string "soil_type", null: false
    t.integer "water_requirements", null: false
    t.integer "light_requirements", null: false
    t.integer "nutritional_value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "farmer_id"
    t.index ["farmer_id"], name: "index_seedlings_on_farmer_id"
  end

  add_foreign_key "seedlings", "farmers"
end
