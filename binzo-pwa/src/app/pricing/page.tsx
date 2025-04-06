// app/pricing/page.tsx

import { Button } from "@/components/Button"
import Navbar from "@/components/Navbar"

const plans = [
  {
    title: "Starter",
    price: "₹0",
    frequency: "/month",
    features: [
      "Up to 100 SKUs",
      "Basic Analytics",
      "1 Warehouse",
      "Email Support",
    ],
    cta: "Get Started",
  },
  {
    title: "Growth",
    price: "₹999",
    frequency: "/month",
    features: [
      "Up to 10,000 SKUs",
      "Advanced Analytics",
      "Multi-Warehouse Support",
      "Priority Email Support",
    ],
    cta: "Upgrade",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "",
    features: [
      "Unlimited SKUs",
      "Custom Metrics",
      "Dedicated Manager",
      "24x7 Support",
    ],
    cta: "Contact Sales",
  },
]

export default function PricingPage() {
  return (

    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-12">
        Choose the plan that fits your business. Upgrade or cancel anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-2xl border p-6 flex flex-col items-center gap-4 ${
              plan.highlighted ? "border-primary shadow-lg" : "border-muted"
            }`}
          >
            <h2 className="text-2xl font-semibold">{plan.title}</h2>
            <p className="text-4xl font-bold">
              {plan.price} <span className="text-base font-normal">{plan.frequency}</span>
            </p>
            <ul className="text-left text-sm mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-muted-foreground">✓ {feature}</li>
              ))}
            </ul>
            <Button className="mt-auto w-full">{plan.cta}</Button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
