App.delete_all
Language.delete_all
LocalizedString.delete_all

ls1 = LocalizedString.create!(string_key: 'hello', string_value: 'Hello')
ls2 = LocalizedString.create!(string_key: 'goodbye', string_value: 'Goodbye')
ls3 = LocalizedString.create!(string_key: 'love', string_value: 'Love')

language1 = Language.create!(code: 'us-en', localized_strings: [ls1, ls2, ls3])

ls4 = LocalizedString.create!(string_key: 'hello', string_value: 'Buenos Dias')
ls5 = LocalizedString.create!(string_key: 'goodbye', string_value: 'Adios')
ls6 = LocalizedString.create!(string_key: 'love', string_value: 'Amore')

language2 = Language.create!(code: 'es', localized_strings: [ls4, ls5, ls6])

App.create!(name: 'hydra', languages: [language1, language2])

ls1 = LocalizedString.create!(string_key: 'hello', string_value: 'Guten Tag')
ls2 = LocalizedString.create!(string_key: 'goodbye', string_value: 'Auf Vedersen')
ls3 = LocalizedString.create!(string_key: 'love', string_value: 'Leibe')

language1 = Language.create!(code: 'de', localized_strings: [ls1, ls2, ls3])

ls4 = LocalizedString.create!(string_key: 'hello', string_value: 'こんにちは')
ls5 = LocalizedString.create!(string_key: 'goodbye', string_value: 'さようなら')
ls6 = LocalizedString.create!(string_key: 'love', string_value: '愛')

language2 = Language.create!(code: 'jp', localized_strings: [ls4, ls5, ls6])

App.create!(name: 'sonar', languages: [language1, language2])
