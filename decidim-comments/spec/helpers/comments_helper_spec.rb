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
        context "if user is not logged in" do
          before :each do
            allow(helper).to receive(:current_user).and_return(nil)
          end

          it "should render the react component `Comments` with the correct data" do
            expect(helper)
              .to receive(:react_component)
              .with("Comments", {
                resourceType: "decidim/comments/dummy_resource",
                resourceId: 1,
                session: nil
              })

            helper.comments_for(resource)
          end
        end

        context "if user is logged in" do
          let(:user) { create(:user) }

          before :each do
            allow(helper).to receive(:current_user).and_return(user)
          end

          it "should render the react component `Comments` with the correct data" do
            expect(helper)
              .to receive(:react_component)
              .with("Comments", {
                resourceType: "decidim/comments/dummy_resource",
                resourceId: 1,
                session: {
                  currentUser: {
                    id: user.id,
                    name: user.name
                  }
                }
              })

            helper.comments_for(resource)
          end
        end
      end
    end
  end
end
