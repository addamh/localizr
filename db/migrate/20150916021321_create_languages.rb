class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.string :code
      t.references :app, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
