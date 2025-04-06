export default function SKUDetailPage({ params }: { params: { id: string } }) {
    const { id } = params
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">SKU Detail: {id}</h2>
        {/* Show detailed SKU info */}
      </div>
    )
  }
  