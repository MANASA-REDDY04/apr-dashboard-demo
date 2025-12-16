import { z } from 'zod';

export const dateRangeSchema = z.object({
    from: z.date(),
    to: z.date(),
});

export const filterSchema = z.object({
    channel: z.string().optional(),
    dateRange: dateRangeSchema.optional(),
});
