class Event < ApplicationRecord
  belongs_to :user, required: false
end
