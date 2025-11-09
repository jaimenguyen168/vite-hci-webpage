import { Collection } from "tinacms";

export const peopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "public/content/people",
  format: "json",
  match: {
    include: "people",
  },
  fields: [
    {
      type: "object",
      name: "images",
      label: "Hero Images",
      fields: [
        {
          type: "object",
          name: "heroes",
          label: "Hero Images",
          description: "Multiple hero background images that will rotate/cycle",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title || item?.alt || "Hero Image" };
            },
          },
          fields: [
            {
              type: "image",
              name: "src",
              label: "Hero Image",
              required: true,
            },
            {
              type: "string",
              name: "alt",
              label: "Alt Text",
              required: true,
              description: "Descriptive text for accessibility",
            },
            {
              type: "string",
              name: "title",
              label: "Title/Caption",
              description: "Optional title or caption for the image",
            },
          ],
        },
      ],
    },

    // HCI Lab Team
    {
      type: "object",
      name: "people",
      label: "Team Members",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name || "New Team Member" };
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          description: "Personal website or profile URL",
        },
        {
          type: "image",
          name: "img",
          label: "Profile Image",
          description: "Profile photo filename",
        },
        {
          type: "string",
          name: "roles",
          label: "Roles",
          list: true,
          options: [
            { value: "pi", label: "Assistant Professor" },
            { value: "phd", label: "PhD Student" },
            { value: "ms", label: "Masters Student" },
            { value: "ug", label: "Undergraduate" },
            { value: "hs", label: "High School" },
          ],
        },
        {
          type: "string",
          name: "status",
          label: "Status",
          required: true,
          options: [
            { value: "active", label: "Active" },
            { value: "alumni", label: "Alumni" },
            { value: "collaborator", label: "Collaborator" },
          ],
        },
        {
          type: "number",
          name: "start",
          label: "Start Year",
          description: "Year joined the team",
        },
        {
          type: "number",
          name: "end",
          label: "End Year",
          description: "Year left the team (if applicable)",
        },
        {
          type: "string",
          name: "affiliation",
          label: "Affiliation",
          required: true,
        },
        {
          type: "string",
          name: "now",
          label: "Current Status",
          description: "Where they are now (for alumni)",
        },
      ],
    },
  ],
};
