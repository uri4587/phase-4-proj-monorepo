class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username

  has_many :tasks, each_serializer: TaskSerializer

end
