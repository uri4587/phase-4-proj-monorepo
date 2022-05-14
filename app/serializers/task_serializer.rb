class TaskSerializer < ActiveModel::Serializer
  attributes :id, :text, :completed, :date_to_complete, :category

 belongs_to :category

 def category
  object.category
 end

 

end
