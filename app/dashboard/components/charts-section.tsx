import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChartsSection() {
  return (
    <section>
      <h2 className="text-xl font-bold my-2">Top Charts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Chart {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Array.from({ length: 5 }).map((_, songIndex) => (
                  <li key={songIndex} className="flex justify-between items-center">
                    <span>{songIndex + 1}. Song {songIndex + 1}</span>
                    <span className="text-gray-500">Artist {songIndex + 1}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

