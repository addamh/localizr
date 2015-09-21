class AppSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :primary_language
  has_many :languages
end
