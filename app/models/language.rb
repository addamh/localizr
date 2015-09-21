class Language < ActiveRecord::Base
  belongs_to :app
  has_many :localized_strings

  def primary?
    self.primary
  end
end
