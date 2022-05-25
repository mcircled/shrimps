# frozen_string_literal: true

module JekyllBookshop
  class Tag < JekyllBookshop::CommonTag
    # Look for includes in the built bookshop directory
    def tag_includes_dirs(context)
      context["site"]["bookshop_component_locations"].freeze
    end

    # Map component names to the .jekyll.html files found in bookshop
    def render(context)
      file = render_variable(context) || @file

      cname = file.strip.split("/").last
      file = "#{file}/#{cname}.jekyll.html"
      render_once_found(context, file)
    end
  end
end
