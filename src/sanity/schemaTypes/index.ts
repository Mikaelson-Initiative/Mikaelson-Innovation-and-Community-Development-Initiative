import { type SchemaTypeDefinition } from 'sanity'
import { postSchema } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema],
}
