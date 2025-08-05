# Carter Chaos E-commerce Platform

A modern, full-stack e-commerce platform for premium streetwear brand Carter Chaos, built with Next.js, Sanity CMS, and MedusaJS.

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity (Headless)
- **Deployment**: Vercel

### Backend
- **E-commerce**: MedusaJS
- **Payment**: Stripe
- **Database**: PostgreSQL
- **Deployment**: Render/Railway

## 📁 Project Structure

```
carter-chaos/
├── frontend/          # Next.js application
├── backend/           # MedusaJS backend
├── sanity-studio/     # Sanity CMS studio
└── README.md
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL
- pnpm (recommended)

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend Setup
```bash
cd backend
pnpm install
pnpm build
pnpm seed
pnpm dev
```

### Sanity Studio Setup
```bash
cd sanity-studio
pnpm install
pnpm dev
```

## 🚀 Deployment

### Frontend (Vercel)
- Connect GitHub repository to Vercel
- Set environment variables
- Deploy automatically on push

### Backend (Render/Railway)
- Create PostgreSQL database
- Deploy MedusaJS backend
- Configure environment variables

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_MEDUSA_BACKEND_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Backend (.env)
```
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
COOKIE_SECRET=
STRIPE_API_KEY=
MEDUSA_ADMIN_ONBOARDING_TYPE=
STORE_CORS=
ADMIN_CORS=
```

## 📋 Features

- 🛍️ Complete e-commerce functionality
- 📱 Mobile-first responsive design
- 🎨 Gen Z aesthetic with dark theme
- 📝 Blog and content management
- 💳 Secure payment processing
- 📊 Admin dashboard
- 🚀 Performance optimized
- 🔍 SEO friendly

## 🎨 Design System

- **Primary Colors**: Black (#000000), Red (#FF0000)
- **Typography**: Modern sans-serif stack
- **Theme**: Dark mode with red accents
- **Animations**: Smooth transitions and hover effects

## 📞 Support

For setup assistance or questions, refer to the individual README files in each directory. 