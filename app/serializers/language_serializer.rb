class LanguageSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :code
  has_many :localized_strings
end
