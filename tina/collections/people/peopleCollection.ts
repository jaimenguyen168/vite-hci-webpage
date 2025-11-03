import { Collection } from "tinacms";

export const peopleCollection: Collection = {
  name: "people",
  label: "People",
  path: "public/content/people",
  format: "json",
  match: {
    include: "people", // Only matches people.json
  },
  fields: [
    // SEO Configuration Section
    {
      type: "object",
      name: "seo",
      label: "SEO Configuration",
      fields: [
        {
          type: "object",
          name: "current",
          label: "Current Members SEO",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Page Title",
              required: true,
              description:
                "The title that appears in browser tabs and search results",
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea",
              },
              description:
                "Brief description for search engines (150-160 characters recommended)",
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO",
            },
          ],
        },
        {
          type: "object",
          name: "alumni",
          label: "Alumni SEO",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Page Title",
              required: true,
              description:
                "The title that appears in browser tabs and search results",
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea",
              },
              description:
                "Brief description for search engines (150-160 characters recommended)",
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO",
            },
          ],
        },
        {
          type: "object",
          name: "collaborators",
          label: "Collaborators SEO",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Page Title",
              required: true,
              description:
                "The title that appears in browser tabs and search results",
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea",
              },
              description:
                "Brief description for search engines (150-160 characters recommended)",
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO",
            },
          ],
        },
      ],
    },
    // Team Members Section
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
