import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { CollectionPreview } from '@/components/home/CollectionPreview'
import { BlogSection } from '@/components/home/BlogSection'
import { NewsletterSection } from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedProducts />
      <CollectionPreview />
      <BlogSection />
      <NewsletterSection />
    </div>
  )
} 