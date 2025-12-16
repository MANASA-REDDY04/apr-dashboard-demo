import { z } from 'zod';

export const settingsSchema = z.object({
    theme: z.enum(['light', 'dark', 'system']),
    notifications: z.boolean(),
});
