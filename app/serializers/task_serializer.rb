class TaskSerializer < ActiveModel::Serializer
  attributes :id, :text, :completed, :date_to_complete

 belongs_to :category

 

end
