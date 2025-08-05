# Carter Chaos CMS (Sanity Studio)

A headless CMS powered by Sanity for managing content on the Carter Chaos e-commerce platform.

## 🚀 Tech Stack

- **CMS**: Sanity Studio v3
- **Schema**: TypeScript-based content models
- **Deployment**: Sanity hosting
- **Media**: Sanity Asset Manager

## 📦 Installation

### Prerequisites
- Node.js 18+
- Sanity CLI
- pnpm (recommended)

### Setup

1. **Install Sanity CLI (if not installed)**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Initialize Sanity project**
   ```bash
   # Login to Sanity
   sanity login
   
   # Create new project (if first time)
   sanity init --project-id your-project-id --dataset production
   ```

4. **Environment variables**
   Create environment variables for the studio:
   ```bash
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=production
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

   The studio will be available at `http://localhost:3333`

## 🏗️ Content Structure

### Documents
- **Blog Posts** (`post`): Articles and news
- **Pages** (`page`): Static pages (About, Contact)
- **Homepage** (`homepage`): Homepage content
- **Collections** (`collection`): Product collections and lookbooks
- **Authors** (`author`): Blog post authors
- **Categories** (`category`): Content categorization

### Objects
- **Block Content** (`blockContent`): Rich text content
- **SEO** (`seo`): Search engine optimization fields
- **Hero** (`hero`): Hero section content
- **Gallery** (`gallery`): Image galleries

### Settings
- **Site Settings** (`siteSettings`): Global site configuration
- **Navigation** (`navigation`): Menu structure

## 📝 Content Models

### Blog Post Schema
```typescript
{
  name: 'post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'mainImage', type: 'image' },
    { name: 'categories', type: 'array', of: [{ type: 'reference' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'blockContent' },
    { name: 'featured', type: 'boolean' },
    { name: 'seo', type: 'seo' }
  ]
}
```

### Collection Schema
```typescript
{
  name: 'collection',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'gallery', type: 'gallery' },
    { name: 'content', type: 'blockContent' },
    { name: 'featured', type: 'boolean' },
    { name: 'seo', type: 'seo' }
  ]
}
```

## 🎨 Studio Customization

### Theme
The studio is customized with Carter Chaos branding:
- **Primary Color**: Red (#FF0000)
- **Logo**: Carter Chaos logo
- **Dark theme**: Matching the frontend aesthetic

### Custom Structure
```typescript
const structure = (S) =>
  S.list()
    .title('Carter Chaos CMS')
    .items([
      S.listItem().title('Blog Posts').child(/* ... */),
      S.listItem().title('Pages').child(/* ... */),
      S.listItem().title('Collections').child(/* ... */),
      S.listItem().title('Settings').child(/* ... */),
    ])
```

## 🔧 Content Management

### Blog Management
1. **Create Posts**: Add new blog articles
2. **Set Authors**: Assign authors to posts
3. **Categorize**: Organize content with categories
4. **Feature Posts**: Mark posts as featured
5. **SEO Optimization**: Add meta titles and descriptions

### Page Management
1. **Static Pages**: Create About, Contact, etc.
2. **Rich Content**: Use block editor for content
3. **Hero Sections**: Configure homepage hero
4. **SEO Settings**: Optimize for search engines

### Collection Management
1. **Product Collections**: Create themed collections
2. **Lookbooks**: Add fashion photography
3. **Season Drops**: Manage seasonal releases
4. **Gallery Images**: Upload and organize media

## 🖼️ Media Management

### Image Optimization
- **Formats**: JPEG, PNG, WebP support
- **Responsive**: Automatic responsive images
- **CDN**: Global content delivery
- **Transformations**: On-the-fly image processing

### Upload Guidelines
- **Product Images**: 1200x1200px minimum
- **Hero Images**: 1920x1080px recommended
- **Blog Images**: 800x600px minimum
- **Collection Images**: 1200x1500px recommended

## 🔄 Content Delivery

### GROQ Queries
```typescript
// Get featured blog posts
const query = `*[_type == "post" && featured == true] {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{name, image}
}`

// Get homepage content
const homeQuery = `*[_type == "homepage"][0] {
  title,
  hero,
  featuredProducts[]->,
  featuredCollections[]->
}`
```

### API Integration
```typescript
// Frontend integration
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-05-03',
})

// Fetch content
const posts = await client.fetch(query)
```

## 🚀 Deployment

### Studio Deployment
```bash
# Deploy studio to Sanity hosting
sanity deploy
```

The studio will be available at:
`https://your-project-id.sanity.studio`

### Production Configuration
```javascript
// sanity.config.ts
export default defineConfig({
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
    colorInput(),
    media(),
  ],
})
```

## 🔐 Security & Permissions

### API Tokens
1. **Read Token**: For frontend content fetching
2. **Write Token**: For programmatic updates
3. **Admin Token**: For full access

### CORS Configuration
```javascript
// Configure CORS for your domains
const corsOrigins = [
  'http://localhost:3000',
  'https://your-frontend-domain.com'
]
```

## 👥 User Management

### Roles
- **Administrator**: Full access to all content
- **Editor**: Content creation and editing
- **Contributor**: Limited content access

### Inviting Users
1. Go to project settings
2. Add team members
3. Assign appropriate roles
4. Send invitations

## 🔧 Development

### Schema Development
```typescript
// Adding new field to existing schema
defineField({
  name: 'newField',
  title: 'New Field',
  type: 'string',
  validation: Rule => Rule.required()
})
```

### Custom Components
```typescript
// Custom input component
import { defineField } from 'sanity'

defineField({
  name: 'customField',
  type: 'string',
  components: {
    input: CustomInputComponent
  }
})
```

## 📊 Content Strategy

### Blog Content
- **Product Spotlights**: Feature individual products
- **Style Guides**: Fashion and styling tips
- **Brand Stories**: Behind-the-scenes content
- **Community**: Customer features and UGC

### Collection Content
- **Seasonal Drops**: New collection announcements
- **Lookbooks**: Professional photography
- **Collaboration**: Brand partnerships
- **Limited Editions**: Exclusive releases

## 🔄 Workflow

### Content Creation Process
1. **Draft**: Create content in draft mode
2. **Review**: Internal content review
3. **SEO Check**: Optimize for search
4. **Publish**: Make content live
5. **Promote**: Share on social media

### Publishing Schedule
- **Blog Posts**: 2-3 times per week
- **Collections**: Monthly drops
- **Product Updates**: As needed
- **Pages**: Quarterly review

## 🤝 Contributing

1. **Content Guidelines**: Follow brand voice
2. **Image Standards**: Maintain quality standards
3. **SEO Best Practices**: Optimize all content
4. **Review Process**: Peer review before publishing

## 📄 License

MIT License - see LICENSE file for details 