# 🖼️ Image Setup Guide for Carter Chaos

## 📁 Folder Structure

Your images should be organized in the `frontend/public/images/` folder:

```
frontend/public/images/
├── products/          # Product images
│   ├── hoodie-black.jpg
│   ├── tee-red.jpg
│   ├── joggers-black.jpg
│   ├── cap-red.jpg
│   ├── denim-jacket.jpg
│   └── sneakers.jpg
└── collections/       # Collection images
    ├── backtalk.jpg
    ├── essentials.jpg
    ├── red-rebellion.jpg
    ├── midnight.jpg
    ├── street-chaos.jpg
    └── limited.jpg
```

## 🎯 How to Add Images

### **Step 1: Prepare Your Images**
- **Format**: Use JPG, PNG, or WebP
- **Size**: Recommended 800x800px for products, 1200x800px for collections
- **Quality**: Optimize for web (compress to reduce file size)

### **Step 2: Add Product Images**
1. Place your product images in `frontend/public/images/products/`
2. Name them according to the product (e.g., `hoodie-black.jpg`)
3. The images will automatically load in the shop page

### **Step 3: Add Collection Images**
1. Place your collection images in `frontend/public/images/collections/`
2. Name them according to the collection:
   - `backtalk.jpg` - Backtalk: Silence no more
   - `essentials.jpg` - Chaos Essentials
   - `red-rebellion.jpg` - Red Rebellion
   - `midnight.jpg` - Midnight Collection
   - `street-chaos.jpg` - Street Chaos
   - `limited.jpg` - Limited Edition

## 🔧 Image Requirements

### **Product Images**
- **Aspect Ratio**: 1:1 (square)
- **Recommended Size**: 800x800px
- **File Size**: Under 200KB
- **Background**: Clean, consistent background

### **Collection Images**
- **Aspect Ratio**: 4:5 (portrait)
- **Recommended Size**: 1200x1500px
- **File Size**: Under 500KB
- **Style**: Lifestyle shots, model photos, or product arrangements

## 📝 Example Image Names

### **Products**
```
hoodie-black.jpg
tee-red.jpg
joggers-black.jpg
cap-red.jpg
denim-jacket.jpg
sneakers.jpg
```

### **Collections**
```
backtalk.jpg
essentials.jpg
red-rebellion.jpg
midnight.jpg
street-chaos.jpg
limited.jpg
```

## ⚡ Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Use WebP**: Convert to WebP format for better compression
3. **Responsive Images**: The Next.js Image component handles this automatically
4. **Lazy Loading**: Images load as needed for better performance

## 🚀 Quick Start

1. **Create the folders** (already done):
   ```bash
   mkdir -p frontend/public/images/products
   mkdir -p frontend/public/images/collections
   ```

2. **Add your images** to the appropriate folders

3. **Test the website** - images will automatically appear!

## 🔍 Troubleshooting

### **Image Not Showing?**
- Check the file path is correct
- Ensure the image file exists in the right folder
- Verify the image filename matches the code

### **Image Looks Blurry?**
- Use higher resolution images
- Ensure proper aspect ratios
- Check image quality before uploading

### **Page Loading Slow?**
- Compress your images
- Use WebP format
- Optimize file sizes

## 📱 Mobile Optimization

The website automatically:
- ✅ Resizes images for different screen sizes
- ✅ Loads optimized versions
- ✅ Handles lazy loading
- ✅ Provides fallback placeholders

## 🎨 Design Tips

- **Consistent Style**: Use similar lighting and backgrounds
- **Brand Colors**: Incorporate your brand colors in the images
- **Quality**: High-quality images reflect your brand quality
- **Diversity**: Show different angles and styles

---

**Need help?** The images will automatically appear once you add them to the correct folders! 