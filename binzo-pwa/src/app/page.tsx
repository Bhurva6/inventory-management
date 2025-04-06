import { ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import FeatureCard from "@/components/FeatureCard"
import {Button}  from "@/components/Button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="text-center py-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Smart Inventory Management for Modern Warehouses
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Binzo helps Indian businesses track SKUs, optimize supply chains, and predict inventory needs — all in one simple dashboard.
        </p>
        <Button className="text-base px-6 py-4">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      <section className="bg-muted py-16 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Track Every SKU" description="Live location and quantity data for every product across warehouses." />
          <FeatureCard title="Smart Forecasting" description="AI models that help prevent stockouts and overstock." />
          <FeatureCard title="Custom Metrics" description="Define KPIs that match your business logic — sales, returns, velocity & more." />
          <FeatureCard title="Real-Time Dashboard" description="Visualize inventory health and supply chain efficiency in real time." />
          <FeatureCard title="Seamless Integrations" description="Plug into Shopify, Tally, ERPNext & more." />
          <FeatureCard title="Alerts & Automation" description="Auto-reorder, low stock alerts, and smart workflows." />
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to take control of your inventory?</h2>
        <Button className="text-base px-6 py-4">
          Try Binzo for Free
        </Button>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2025 Binzo Inc. All rights reserved.
      </footer>
    </main>
  )
}
