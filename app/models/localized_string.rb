class LocalizedString < ActiveRecord::Base
  belongs_to :language

  def primary_value
    self.language.app.primary_language.localized_strings.where(string_key: self.string_key).first.try(:string_value) if self.language.app.primary_language
  end
end
