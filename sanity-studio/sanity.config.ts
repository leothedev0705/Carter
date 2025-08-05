import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Import schemas
import {schemaTypes} from './schemas'

// Simple structure for the studio
const structure = (S: any) =>
  S.list()
    .title('Carter Chaos CMS')
    .items([
      S.documentTypeListItem('post').title('Blog Posts'),
      S.documentTypeListItem('page').title('Pages'),
    ])

export default defineConfig({
  name: 'carter-chaos',
  title: 'Carter Chaos CMS',
  
  projectId: '80g83p2r',
  dataset: 'production',
  
  plugins: [
    structureTool({
      structure,
    }),
  ],
  
  schema: {
    types: schemaTypes,
  },

}) 