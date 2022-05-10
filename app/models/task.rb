class Task < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :text, presence: true
end
