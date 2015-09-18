class AppSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name
  has_many :languages
end
