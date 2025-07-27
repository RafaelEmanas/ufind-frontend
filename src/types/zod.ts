import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const GetItemsQuerySchema = z.object({
  page:  z.coerce.number().int().gte(1).default(1),
  search: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().regex(dateRegex).optional(),
  endDate: z.string().regex(dateRegex).optional(),
  addIsClaimed: z.coerce.boolean().optional()
});

export type GetItemsDTOZod = z.infer<typeof GetItemsQuerySchema>;