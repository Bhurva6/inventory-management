import Link from "next/link"

export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">Binzo</h1>
        <div className="space-x-4">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
        </div>
      </nav>
    )
  }
  