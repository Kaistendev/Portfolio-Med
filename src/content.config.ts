import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog/es' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Dr. Juan Pérez'),
    category: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    locale: z.literal('es').default('es'),
  }),
});

const blog_en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog/en' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Dr. Juan Pérez'),
    category: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    locale: z.literal('en').default('en'),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/servicios/es' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    locale: z.literal('es').default('es'),
  }),
});

const servicios_en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/servicios/en' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    locale: z.literal('en').default('en'),
  }),
});

const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonios/es' }),
  schema: z.object({
    name: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
    locale: z.literal('es').default('es'),
  }),
});

const testimonios_en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/testimonios/en' }),
  schema: z.object({
    name: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
    locale: z.literal('en').default('en'),
  }),
});

const perfil = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/perfil/es' }),
  schema: z.object({
    name: z.string(),
    specialty: z.string(),
    license: z.string(),
    bio: z.string(),
    photo: z.string(),
    cv: z.string().optional(),
    locale: z.literal('es').default('es'),
  }),
});

const perfil_en = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/perfil/en' }),
  schema: z.object({
    name: z.string(),
    specialty: z.string(),
    license: z.string(),
    bio: z.string(),
    photo: z.string(),
    cv: z.string().optional(),
    locale: z.literal('en').default('en'),
  }),
});

export const collections = {
  blog,
  blog_en,
  servicios,
  servicios_en,
  testimonios,
  testimonios_en,
  perfil,
  perfil_en,
};