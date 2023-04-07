if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_seedlingHub_session', domain: 'seedlinghub-json-api.com'
  else
    Rails.application.config.session_store :cookie_store, key: '_seedlingHub_session'
end