class AddNotesToLocalizedString < ActiveRecord::Migration
  def change
    add_column :localized_strings, :notes, :text
  end
end
