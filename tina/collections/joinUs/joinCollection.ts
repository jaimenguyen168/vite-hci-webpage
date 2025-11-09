import { Collection } from "tinacms";

export const joinCollection: Collection = {
  name: "join",
  label: "Join Us",
  path: "public/content/join",
  format: "json",
  match: {
    include: "join",
  },
  fields: [
    {
      type: "object",
      name: "seo",
      label: "SEO Configuration",
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
      name: "apply",
      label: "Apply Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "object",
          name: "button",
          label: "Application Button",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
              required: true,
            },
            {
              type: "string",
              name: "url",
              label: "Button URL",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "faqs",
      label: "Frequently Asked Questions",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.question || "New FAQ" };
        },
      },
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "boolean",
          name: "defaultOpen",
          label: "Default Open",
          description: "Should this FAQ be open by default?",
        },
      ],
    },
  ],
};
