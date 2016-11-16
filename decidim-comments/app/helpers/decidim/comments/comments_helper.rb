# frozen_string_literal: true
module Decidim
  module Comments
    module CommentsHelper
      def comments_for(resource, options = {})
        react_component("Comments", options.merge!(
          resource_type: resource.class.name.underscore,
          resource_id: resource.id
        ))
      end
    end
  end
end