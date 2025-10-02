import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    results: z.string(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

const ventures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    status: z.enum(['active', 'beta', 'sunset']),
    website: z.string().url(),
    category: z.string(),
    stack: z.array(z.string()),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  blog,
  'case-studies': caseStudies,
  ventures,
}

