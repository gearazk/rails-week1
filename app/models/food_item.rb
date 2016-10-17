class FoodItem < ApplicationRecord
  	belongs_to :section
	
	def self.search(search)
		where('(name LIKE ? or description LIKE ?)', "%#{search}%" , "%#{search}%")
	end

  	def get_image_or_default
  		if img.present?
  			img
  		else
  			"http://loremflickr.com/320/240/#{name.gsub(' ','+')}"
  		end
  	end
end
