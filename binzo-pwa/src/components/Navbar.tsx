export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">Binzo</h1>
        <div className="space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Login</a>
        </div>
      </nav>
    )
  }
  