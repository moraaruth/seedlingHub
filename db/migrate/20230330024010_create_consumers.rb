class CreateConsumers < ActiveRecord::Migration[7.0]
  def change
    create_table :consumers do |t|

      t.timestamps
    end
  end
end
