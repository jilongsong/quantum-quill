import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold">Song Beat</div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search for songs, artists..." className="bg-primary-foreground text-primary" />
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

