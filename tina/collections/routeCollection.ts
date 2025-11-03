import { Collection } from "tinacms";

export const routeCollection: Collection = {
  name: "routes",
  label: "Routes",
  path: "public/content/routes",
  format: "json",
  fields: [
    {
      type: "object",
      name: "home",
      label: "Home",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
        {
          type: "string",
          name: "heroSubtitle",
          label: "Hero Subtitle",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "about",
      label: "About",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "research",
      label: "Research",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "people",
      label: "People",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "courses",
      label: "Courses",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "sponsors",
      label: "Sponsors",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "join",
      label: "Join",
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image",
          },
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true,
        },
      ],
    },
  ],
};
