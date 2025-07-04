import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { GhostInventorySection } from "@/components/sections/ghost-inventory-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { StatsSection } from "@/components/sections/stats-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GhostInventorySection />
        <HowItWorksSection />
        <FeaturedProducts />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
