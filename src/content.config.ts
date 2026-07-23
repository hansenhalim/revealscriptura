import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Sermon notes are Indonesian-only content shared by both locales, like the
// Join Us videos. The markdown body is the full note; entries with an empty
// body render as unlinked cards on the index until the content is migrated
// from the old Google Site.
const sundayNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sunday-notes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      // Designed title-card image from the old site (1080×1274 PNG).
      card: image(),
      // Printed as-is on the title card; several cards carry copy-paste
      // dates, so `order` (the old site's curated sequence) governs sorting.
      dateLabel: z.string(),
      speaker: z.string(),
      scripture: z.string().optional(),
      order: z.number(),
    }),
});

export const collections = { sundayNotes };
