import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      // Route content
      {
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
      },

      // Join content
      {
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
      },

      // People content
      {
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
      },
    ],
  },
});
