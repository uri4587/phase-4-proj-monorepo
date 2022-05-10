# require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.create(name: "Joe")

chores = Category.create(name: "Chores")
work = Category.create(name: "Work")
fun = Category.create(name: "Fun")
family = Category.create(name: "Family")
important = Category.create(name: "SUPER IMPORTANT!!!!!")

task1 = Task.create(text: "Take out garbage", date_to_complete: Date.today, user_id: user1.id, category_id: chores.id)
task2 = Task.create(text: "File Taxes", date_to_complete: Date.today, user_id: user1.id, category_id: important.id)