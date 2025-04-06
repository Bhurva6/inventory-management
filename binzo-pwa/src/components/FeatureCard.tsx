type Props = {
    title: string
    description: string
  }
  
  export default function FeatureCard({ title, description }: Props) {
    return (
      <div className="bg-background border rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    )
  }
  