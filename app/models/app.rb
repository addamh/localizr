class App < ActiveRecord::Base
  has_many :languages
  
  def primary_language
    self.languages.where(primary: true).first
  end
end
