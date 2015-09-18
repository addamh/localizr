class CreateLocalizedStrings < ActiveRecord::Migration
  def change
    create_table :localized_strings do |t|
      t.string :string_key
      t.string :string_value
      t.references :language, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
