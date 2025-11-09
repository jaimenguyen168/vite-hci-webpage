import type { Collection } from "tinacms";

export const aboutCollection: Collection = {
  name: "about",
  label: "About",
  path: "public/content/about",
  format: "json",
  fields: [
    {
      type: "object",
      name: "communityResearch",
      label: "Community Research",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
        { type: "string", name: "video", label: "Video URL" },
      ],
    },
    {
      type: "object",
      name: "learningOutcomes",
      label: "Learning Outcomes",
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        {
          type: "object",
          name: "items",
          label: "Learning Outcome Items",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "alumni",
          label: "Alumni Testimonials",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Name" },
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
            { type: "image", name: "img", label: "Image" },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "events",
      label: "Events",
      fields: [
        { type: "string", name: "title1", label: "First Section Title" },
        { type: "string", name: "description1", label: "First Section Description", ui: { component: "textarea" } },
        { type: "image", name: "image1", label: "First Section Image" },
        { type: "string", name: "image1Alt", label: "First Image Alt Text" },
        { type: "string", name: "title2", label: "Second Section Title" },
        { type: "string", name: "description2", label: "Second Section Description", ui: { component: "textarea" } },
        { type: "image", name: "image2", label: "Second Section Image" },
        { type: "string", name: "image2Alt", label: "Second Image Alt Text" },
        { type: "string", name: "ctaTitle", label: "CTA Title" },
        { type: "string", name: "buttonText", label: "Button Text" },
        { type: "string", name: "buttonLink", label: "Button Link" },
      ],
    },
  ],
};