import { Collection } from "tinacms";

export const joinCollection: Collection = {
  name: "join",
  label: "Join Us",
  path: "public/content/join",
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "button",
      label: "Button",
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
};
