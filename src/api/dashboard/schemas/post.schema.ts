import { z } from "zod";
import { Category } from "../interfaces";

export const CreatePostSchema = z.object({
  title: z.string().max(100).min(20),
  description: z.string().max(1000).min(100),
  content: z.string(),
  tags: z.array(z.string().max(20).min(3)),
  category: z.nativeEnum(Category).optional(),
});

export const UpdatePostSchema = CreatePostSchema.extend({
  resourcesIds: z.array(z.string()).optional(),
});

export type CreatePostProps = z.infer<typeof CreatePostSchema>;
export type UpdatePostProps = z.infer<typeof CreatePostSchema>;
