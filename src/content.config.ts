import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const buildlogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/buildlogs" }),
  schema: z.object({
    title: z.string(),
    // Optional lead emphasized in titles (text before ":").
    titleLead: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string(),
    status: z.enum(["Shipped", "In Progress"]).default("Shipped"),
    featured: z.boolean().default(false),
    // Last-two "Additional" bucket.
    additional: z.boolean().default(false),
    // Orange year badge; omitted / empty hides the badge (Additional).
    yearLabel: z.string().optional(),
    // Lower numbers surface first.
    order: z.number().default(100),
    image: z.string().optional(),
    imageAlt: z.string().default(""),
    // Cover media kind for cards / article hero.
    coverType: z.enum(["image", "gif", "video"]).default("image"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { buildlogs };
