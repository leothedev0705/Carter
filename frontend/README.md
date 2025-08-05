# Carter Chaos Frontend

A modern Next.js frontend for the Carter Chaos streetwear e-commerce platform.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Carter Chaos theme
- **Animations**: Framer Motion
- **State Management**: Zustand + React Context
- **Icons**: Lucide React
- **CMS**: Sanity (Headless)
- **E-commerce**: MedusaJS integration
- **Payment**: Stripe
- **Deployment**: Vercel

## 🎨 Design System

### Colors
- **Primary**: Red (#FF0000) with variations
- **Background**: Black (#000000) with gray variations
- **Typography**: Inter (body), Oswald (display)

### Theme Features
- Dark mode by default
- Gen Z aesthetic with bold red accents
- Smooth animations and hover effects
- Mobile-first responsive design

## 📦 Installation

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Configure the following variables:
   ```
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and configurations
│   ├── context/          # React contexts
│   ├── sanity/           # Sanity client and queries
│   ├── medusa/           # MedusaJS client
│   └── utils/            # Helper functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🔧 Key Features

### Pages
- **Homepage**: Hero, featured products, collections, newsletter
- **Shop**: Product grid with filtering and search
- **Product Details**: Individual product pages with variants
- **Cart**: Shopping cart with quantity management
- **Checkout**: Stripe-powered checkout flow
- **Blog**: Sanity CMS-powered blog
- **About/Contact**: CMS-managed pages

### Components
- **Header**: Responsive navigation with cart counter
- **Footer**: Brand info, links, newsletter signup
- **Product Cards**: Hover effects, ratings, quick actions
- **Hero Section**: Animated background, CTAs, stats
- **Newsletter**: Email collection with validation

### Integrations
- **MedusaJS**: Product catalog, cart, checkout
- **Sanity**: Blog posts, pages, collections
- **Stripe**: Secure payment processing
- **Framer Motion**: Page transitions and animations

## 🎨 Styling

### Tailwind Classes
- `btn-primary`: Primary button style
- `btn-secondary`: Secondary button style
- `btn-outline`: Outline button style
- `card`: Basic card container
- `card-glow`: Card with red glow effect
- `input-field`: Form input styling
- `text-gradient`: Red gradient text
- `heading-primary`: Large display heading
- `heading-secondary`: Section heading

### Custom Animations
- `animate-glow`: Pulsing red glow effect
- `hover-lift`: Lift on hover
- `fade-in-up`: Fade in from bottom
- `slide-in-right`: Slide from right

## 🔄 State Management

### Context Providers
- **AuthProvider**: User authentication state
- **CartProvider**: Shopping cart management

### Usage Example
```tsx
const { user, login, logout } = useAuth()
const { addItem, removeItem, cartQuantity } = useCart()
```

## 📱 Responsive Design

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1280px+

All components are built mobile-first with progressive enhancement.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Configure environment variables**
3. **Deploy automatically on git push**

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for consistent styling

### Performance
- Image optimization with Next.js Image
- Code splitting with dynamic imports
- Font optimization with next/font

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details 