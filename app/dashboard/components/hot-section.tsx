import { Card, CardContent } from "@/components/ui/card"

export default function HotSection() {
  return (
    <section className="my-4">
      <h2 className="text-xl font-bold my-2">Hot Right Now</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <div className="aspect-video bg-gray-200 rounded-md mb-2"></div>
              <p className="font-medium truncate">Hot Track {index + 1}</p>
              <p className="text-sm text-gray-500 truncate">Artist {index + 1}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

