class AddOfficialImageProposalToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :official_image_proposal, :string
  end
end
