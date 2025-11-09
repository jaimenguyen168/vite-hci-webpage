// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/routeCollection.ts
var routeCollection = {
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        },
        {
          type: "string",
          name: "heroSubtitle",
          label: "Hero Subtitle",
          ui: {
            component: "textarea"
          }
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "heroImage",
          label: "Hero Image",
          description: "Paste image URL or select from media",
          ui: {
            component: "image"
          }
        },
        {
          type: "string",
          name: "heroTitle",
          label: "Hero Title",
          required: true
        }
      ]
    }
  ]
};

// tina/collections/joinUs/joinCollection.ts
var joinCollection = {
  name: "join",
  label: "Join Us",
  path: "public/content/join",
  format: "json",
  match: {
    include: "join"
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
          description: "The title that appears in browser tabs and search results"
        },
        {
          type: "string",
          name: "description",
          label: "Meta Description",
          required: true,
          ui: {
            component: "textarea"
          },
          description: "Brief description for search engines (150-160 characters recommended)"
        },
        {
          type: "string",
          name: "keywords",
          label: "Keywords",
          required: true,
          description: "Comma-separated keywords for SEO"
        }
      ]
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
          required: true
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
              required: true
            },
            {
              type: "string",
              name: "url",
              label: "Button URL",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "faqs",
      label: "Frequently Asked Questions",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.question || "New FAQ" };
        }
      },
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          required: true,
          ui: {
            component: "textarea"
          }
        },
        {
          type: "boolean",
          name: "defaultOpen",
          label: "Default Open",
          description: "Should this FAQ be open by default?"
        }
      ]
    }
  ]
};

// tina/collections/people/peopleCollection.ts
var peopleCollection = {
  name: "people",
  label: "People",
  path: "public/content/people",
  format: "json",
  match: {
    include: "people"
    // Only matches people.json
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
              description: "The title that appears in browser tabs and search results"
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea"
              },
              description: "Brief description for search engines (150-160 characters recommended)"
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO"
            }
          ]
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
              description: "The title that appears in browser tabs and search results"
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea"
              },
              description: "Brief description for search engines (150-160 characters recommended)"
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO"
            }
          ]
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
              description: "The title that appears in browser tabs and search results"
            },
            {
              type: "string",
              name: "description",
              label: "Meta Description",
              required: true,
              ui: {
                component: "textarea"
              },
              description: "Brief description for search engines (150-160 characters recommended)"
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              required: true,
              description: "Comma-separated keywords for SEO"
            }
          ]
        }
      ]
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
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          isTitle: true,
          required: true
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          description: "Personal website or profile URL"
        },
        {
          type: "image",
          name: "img",
          label: "Profile Image",
          description: "Profile photo filename"
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
            { value: "hs", label: "High School" }
          ]
        },
        {
          type: "string",
          name: "status",
          label: "Status",
          required: true,
          options: [
            { value: "active", label: "Active" },
            { value: "alumni", label: "Alumni" },
            { value: "collaborator", label: "Collaborator" }
          ]
        },
        {
          type: "number",
          name: "start",
          label: "Start Year",
          description: "Year joined the team"
        },
        {
          type: "number",
          name: "end",
          label: "End Year",
          description: "Year left the team (if applicable)"
        },
        {
          type: "string",
          name: "affiliation",
          label: "Affiliation",
          required: true
        },
        {
          type: "string",
          name: "now",
          label: "Current Status",
          description: "Where they are now (for alumni)"
        }
      ]
    }
  ]
};

// tina/collections/about/aboutCollection.ts
var aboutCollection = {
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
        { type: "string", name: "video", label: "Video URL" }
      ]
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
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
          ]
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
            { type: "image", name: "img", label: "Image" }
          ]
        }
      ]
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
        { type: "string", name: "buttonLink", label: "Button Link" }
      ]
    }
  ]
};

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to set up new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [routeCollection, joinCollection, peopleCollection, aboutCollection]
  }
});
export {
  config_default as default
};
