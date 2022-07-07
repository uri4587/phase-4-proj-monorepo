# require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.create(name: "Joe",username: "jman2022",email: "jman2022@gmail.com", password: "123")

chores = Category.create(name: "Chores")
work = Category.create(name: "Work")
fun = Category.create(name: "Fun")
family = Category.create(name: "Family")
important = Category.create(name: "SUPER IMPORTANT!!!!!")

task1 = Task.create(text: "Take out garbage", date_to_complete: Date.today, completed: false, user_id: user1.id, category_id: chores.id)
task2 = Task.create(text: "File Taxes", date_to_complete: Date.tomorrow, completed: false, user_id: user1.id, category_id: important.id)
task3 = Task.create(text: "do dishes", date_to_complete: Date.today + 2,completed: false, user_id: user1.id, category_id: chores.id)
task4 = Task.create(text: "go to gym", date_to_complete: Date.today + 5, completed: false, user_id: user1.id, category_id: fun.id)
task5 = Task.create(text: "family dinner", date_to_complete: Date.today + 3, completed: false, user_id: user1.id, category_id: family.id)