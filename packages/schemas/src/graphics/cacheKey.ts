import { Schema } from '@pdfme-tables/common';

export const getCacheKey = (schema: Schema, input: string) => `${schema.type}${input}`;
