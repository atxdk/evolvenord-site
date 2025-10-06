import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    tags: z.array(z.string()),
    coverImage: z.string(),
    draft: z.boolean().optional(),
  }),
});

const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    results: z.string(),
    coverImage: z.string(),
    draft: z.boolean().optional(),
  }),
});

const venturesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    status: z.enum(['active', 'beta', 'sunset']),
    website: z.string().url(),
    category: z.string(),
    stack: z.array(z.string()),
    coverImage: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'case-studies': caseStudiesCollection,
  'ventures': venturesCollection,
};
