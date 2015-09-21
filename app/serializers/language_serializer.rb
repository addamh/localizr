class LanguageSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :code, :country_code, :primary, :app_id
  has_many :localized_strings
end
