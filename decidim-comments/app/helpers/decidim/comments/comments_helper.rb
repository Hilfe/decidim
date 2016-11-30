# frozen_string_literal: true
module Decidim
  module Comments
    module CommentsHelper
      def comments_for(resource, options = {})
        session = if current_user.present?
          {
            currentUser: current_user.attributes.slice("id", "name").symbolize_keys
          }
        end

        react_component("Comments", options.merge!(
          resourceType: resource.class.name.underscore,
          resourceId: resource.id,
          session: session
        ))
      end
    end
  end
end