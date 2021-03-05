import React from "react";
import { TagIcon } from "../../components/app/icons";

export default {
  name: "tag",
  title: "Tag",
  type: "document",
  icon: TagIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
    },

    prepare({ name }) {
      return {
        title: name,
        media: <TagIcon />,
      };
    },
  },
};