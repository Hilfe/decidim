# frozen_string_literal: true
require "spec_helper"

module Decidim
  module Comments
    describe CommentsHelper do
      class DummyResource
        def id
          1
        end
      end

      let(:resource) { DummyResource.new }

      describe "comments_for" do
        it "should render the react component `Comments` with the correct data" do
          expect(helper)
            .to receive(:react_component)
            .with("Comments", resource_type: "decidim/comments/dummy_resource", resource_id: 1, votable: true, arguable: false)

          helper.comments_for(resource, votable: true, arguable: false)
        end
      end
    end
  end
end
