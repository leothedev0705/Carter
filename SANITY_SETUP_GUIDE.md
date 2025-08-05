# 🎯 Sanity Studio Setup Guide for Carter Chaos

## 🚀 Quick Start

### **1. Start Your Sanity Studio**
```bash
cd sanity-studio
npm run dev
```

### **2. Access Your CMS**
Open your browser and go to: `http://localhost:3333`

## 📝 How to Add Products

### **Step 1: Create a New Product**
1. Click **"Product"** in the left sidebar
2. Click **"Create new"** button
3. Fill in the product details:

### **Required Fields:**
- **Product Title**: "Chaos Hoodie Black"
- **Slug**: Auto-generated from title
- **Price**: 89.99
- **Category**: Select from dropdown (T-Shirts, Hoodies, etc.)
- **Main Image**: Upload your product image

### **Optional Fields:**
- **Subtitle**: Short tagline
- **Description**: Detailed product description
- **Original Price**: For sale items
- **Tags**: Add relevant tags (streetwear, hoodie, black)
- **Rating**: 4.8
- **New Product**: Check if it's new
- **On Sale**: Check if it's on sale
- **Featured Product**: Check to feature on homepage
- **Available Sizes**: Select sizes (XS, S, M, L, XL, XXL)
- **Available Colors**: Select colors
- **Stock Quantity**: 100
- **Weight**: In grams
- **Materials**: List of materials used
- **Care Instructions**: How to care for the product

### **Step 2: Upload Images**
1. Click on **"Main Image"** field
2. Drag & drop your image or click to browse
3. Use the hotspot tool to crop/focus the image
4. Add **"Additional Images"** for multiple product views

### **Step 3: Assign to Collection**
1. In the **"Collection"** field, select which collection this product belongs to
2. This will automatically link the product to the collection

## 🎨 How to Add Collections

### **Step 1: Create a New Collection**
1. Click **"Collection"** in the left sidebar
2. Click **"Create new"** button
3. Fill in the collection details:

### **Required Fields:**
- **Collection Title**: "Backtalk"
- **Subtitle**: "Silence no more"
- **Slug**: Auto-generated from title
- **Category**: Select (Statement Pieces, Essentials, Limited Edition)
- **Featured Image**: Upload collection image
- **Number of Items**: 24

### **Optional Fields:**
- **Description**: Detailed collection description
- **New Collection**: Check if it's new
- **Featured Collection**: Check to feature on homepage
- **Additional Images**: Upload more collection images
- **Content**: Rich text content for the collection page

## 📱 Image Requirements

### **Product Images:**
- **Format**: JPG, PNG, WebP
- **Size**: 800x800px (square)
- **Background**: Clean, consistent
- **Quality**: High resolution

### **Collection Images:**
- **Format**: JPG, PNG, WebP
- **Size**: 1200x1500px (portrait)
- **Style**: Lifestyle shots, model photos
- **Quality**: High resolution

## 🔧 Example Products to Add

### **Backtalk Collection:**
1. **"Chaos Hoodie Black"**
   - Price: $89.99
   - Category: Hoodies
   - Tags: streetwear, hoodie, black, statement
   - Rating: 4.8
   - New: Yes

2. **"Red Devil Tee"**
   - Price: $39.99
   - Original Price: $49.99
   - Category: T-Shirts
   - Tags: streetwear, tee, red, statement
   - Rating: 4.9
   - Sale: Yes

### **Chaos Essentials Collection:**
1. **"Street Chaos Joggers"**
   - Price: $69.99
   - Category: Pants
   - Tags: streetwear, joggers, black, essentials
   - Rating: 4.7
   - New: Yes

## 🎯 Example Collections to Add

### **1. Backtalk Collection**
- **Title**: "Backtalk"
- **Subtitle**: "Silence no more"
- **Category**: Statement Pieces
- **Description**: "Bold statements that speak louder than words. This collection challenges the status quo with provocative designs and rebellious energy."
- **Item Count**: 24
- **New**: Yes

### **2. Chaos Essentials Collection**
- **Title**: "Chaos Essentials"
- **Subtitle**: "Core pieces that define the aesthetic"
- **Category**: Essentials
- **Description**: "The foundation of your streetwear wardrobe. Timeless pieces with the Carter Chaos signature style."
- **Item Count**: 18
- **New**: No

### **3. Red Rebellion Collection**
- **Title**: "Red Rebellion"
- **Subtitle**: "Bold statements in signature red"
- **Category**: Statement Pieces
- **Description**: "Our signature red collection that demands attention. Each piece is a statement of defiance and style."
- **Item Count**: 15
- **New**: No

## ⚡ Tips for Better Management

### **1. Use Tags Wisely**
- Add relevant tags for easy filtering
- Use consistent tag naming
- Include brand-specific tags

### **2. Optimize Images**
- Use high-quality images
- Crop images properly with hotspot tool
- Keep file sizes reasonable

### **3. Organize Collections**
- Group related products together
- Use consistent naming conventions
- Add meaningful descriptions

### **4. Set Up Categories**
- Use the predefined categories
- Keep category names consistent
- Assign products to appropriate categories

## 🔄 Publishing Workflow

### **1. Draft Mode**
- Create products in draft mode first
- Test all fields and images
- Review before publishing

### **2. Publishing**
- Click **"Publish"** when ready
- Products appear on website immediately
- Can be unpublished if needed

### **3. Updates**
- Edit products anytime
- Changes reflect immediately on website
- No need to redeploy

## 🚨 Troubleshooting

### **Images Not Showing?**
- Check image file format (JPG, PNG, WebP)
- Ensure image size is reasonable
- Try re-uploading the image

### **Products Not Appearing?**
- Make sure product is published
- Check all required fields are filled
- Verify collection assignment

### **Slow Loading?**
- Optimize image sizes
- Use WebP format when possible
- Compress images before upload

## 📊 Data Structure

### **Product Fields:**
```typescript
{
  _id: string
  title: string
  subtitle?: string
  slug: { current: string }
  description?: string
  price: number
  originalPrice?: number
  category: string
  tags?: string[]
  rating: number
  isNew: boolean
  isSale: boolean
  featured: boolean
  mainImage: any
  images?: any[]
  sizes?: string[]
  colors?: string[]
  stock: number
  collection?: { _id: string, title: string, slug: { current: string } }
}
```

### **Collection Fields:**
```typescript
{
  _id: string
  title: string
  subtitle?: string
  slug: { current: string }
  description?: string
  category: string
  image: any
  images?: any[]
  isNew: boolean
  featured: boolean
  itemCount: number
}
```

---

**🎉 You're all set!** Your Sanity Studio is now ready to manage all your Carter Chaos products and collections. The website will automatically fetch and display everything you add through the CMS. 