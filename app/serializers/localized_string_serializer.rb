class LocalizedStringSerializer < ActiveModel::Serializer
  attributes :id, :string_key, :string_value, :language_id, :notes
end
