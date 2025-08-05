# Carter Chaos Backend

A robust e-commerce backend powered by MedusaJS for the Carter Chaos streetwear platform.

## 🚀 Tech Stack

- **Framework**: MedusaJS
- **Database**: PostgreSQL
- **Cache/Sessions**: Redis
- **Payment**: Stripe
- **File Storage**: Local (configurable for S3)
- **Admin Panel**: Medusa Admin
- **API**: RESTful + GraphQL

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- Redis (optional but recommended)
- pnpm (recommended)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Environment variables**
   ```bash
   cp env.template .env
   ```
   
   Configure the following variables:
   ```bash
   # Database
   DATABASE_URL=postgres://username:password@localhost:5432/medusa-db
   
   # Redis (optional)
   REDIS_URL=redis://localhost:6379
   
   # Security
   JWT_SECRET=your_jwt_secret_here
   COOKIE_SECRET=your_cookie_secret_here
   
   # CORS
   STORE_CORS=http://localhost:3000
   ADMIN_CORS=http://localhost:7000,http://localhost:7001
   
   # Stripe
   STRIPE_API_KEY=sk_test_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

3. **Database setup**
   ```bash
   # Create database
   createdb medusa-db
   
   # Run migrations
   pnpm build
   npx medusa migrations run
   ```

4. **Seed sample data**
   ```bash
   pnpm seed
   ```

5. **Create admin user**
   ```bash
   npx medusa user -e admin@carterchaos.com -p supersecret
   ```

6. **Start development server**
   ```bash
   pnpm dev
   ```

   - **API**: `http://localhost:9000`
   - **Admin**: `http://localhost:7001`

## 🏗️ Project Structure

```
backend/
├── src/                   # Source code
│   ├── api/              # Custom API routes
│   ├── loaders/          # Custom loaders
│   ├── migrations/       # Database migrations
│   ├── models/           # Custom entities
│   ├── repositories/     # Data access layer
│   ├── services/         # Business logic
│   ├── subscribers/      # Event subscribers
│   └── index.ts          # Entry point
├── data/                 # Seed data
│   └── seed.json        # Sample products
├── uploads/              # File uploads
├── medusa-config.js      # Medusa configuration
└── tsconfig.json         # TypeScript config
```

## 🛍️ E-commerce Features

### Products
- Product catalog with variants
- Inventory tracking
- Categories and collections
- Product images and galleries
- SEO-friendly URLs

### Orders
- Order management
- Payment processing
- Fulfillment tracking
- Customer notifications
- Return handling

### Customers
- User registration/login
- Customer profiles
- Order history
- Address management

### Cart & Checkout
- Session-based cart
- Guest checkout
- Multiple payment methods
- Shipping calculations
- Tax handling

## 💳 Payment Integration

### Stripe Configuration
```javascript
// medusa-config.js
{
  resolve: `medusa-payment-stripe`,
  options: {
    api_key: process.env.STRIPE_API_KEY,
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  },
}
```

### Webhook Setup
1. Create webhook endpoint in Stripe Dashboard
2. Set endpoint URL: `https://your-domain.com/stripe/hooks`
3. Add webhook secret to environment variables

## 🔧 API Endpoints

### Store API (Frontend)
- `GET /store/products` - List products
- `GET /store/products/:id` - Get product details
- `POST /store/carts` - Create cart
- `POST /store/carts/:id/line-items` - Add to cart
- `POST /store/carts/:id/payment-sessions` - Initialize payment
- `POST /store/customers` - Register customer
- `POST /store/auth` - Customer login

### Admin API
- `GET /admin/products` - Manage products
- `GET /admin/orders` - Manage orders
- `GET /admin/customers` - Manage customers
- `GET /admin/analytics` - View analytics

## 📊 Sample Data

The seed file includes:
- **4 Products**: Hoodie, T-shirt, Joggers, Cap
- **Multiple Variants**: Different sizes for each product
- **Regions**: USA with USD currency
- **Shipping Options**: Standard and Express
- **Admin User**: admin@carterchaos.com

### Product Examples
```json
{
  "title": "Chaos Hoodie Black",
  "price": 8999, // $89.99 in cents
  "variants": [
    {"title": "XS", "sku": "CH-BLACK-XS"},
    {"title": "S", "sku": "CH-BLACK-S"},
    // ... more sizes
  ]
}
```

## 🔒 Security

### Authentication
- JWT-based authentication
- Secure cookie sessions
- Password hashing
- CORS protection

### Environment Variables
- Database credentials
- API keys
- Webhook secrets
- Session secrets

## 📈 Performance

### Caching
- Redis for session storage
- Query result caching
- Product catalog caching

### Database
- Optimized queries
- Indexed search fields
- Connection pooling

## 🚀 Deployment

### Production Setup

1. **Database**
   ```bash
   # Production database setup
   DATABASE_URL=postgres://user:pass@host:5432/prod_db
   ```

2. **Environment**
   ```bash
   NODE_ENV=production
   STORE_CORS=https://your-frontend-domain.com
   ADMIN_CORS=https://your-admin-domain.com
   ```

3. **Build & Start**
   ```bash
   pnpm build
   pnpm start
   ```

### Hosting Options

#### Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

#### Render
1. Create new web service
2. Configure build/start commands
3. Set environment variables

#### Heroku
1. Create Heroku app
2. Add PostgreSQL addon
3. Configure environment variables

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 🔧 Development

### Custom Extensions
- Add custom entities in `src/models/`
- Create custom services in `src/services/`
- Add API routes in `src/api/`

### Database Migrations
```bash
# Generate migration
npx medusa migrations generate

# Run migrations
npx medusa migrations run
```

### Testing
```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:coverage
```

## 📱 Admin Panel

Access the admin panel at `http://localhost:7001` with:
- **Email**: admin@carterchaos.com
- **Password**: supersecret

### Admin Features
- Product management
- Order processing
- Customer management
- Analytics dashboard
- Content management

## 🔄 Integration

### Frontend Integration
```typescript
// Initialize Medusa client
import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 3,
})

// Fetch products
const products = await medusa.products.list()
```

### Webhooks
- Order events
- Payment updates
- Inventory changes
- Customer actions

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Add tests
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details 