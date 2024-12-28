import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const playlistItems = [
  { id: 1, title: "Song 1", artist: "Artist 1", duration: "3:45" },
  { id: 2, title: "Song 2", artist: "Artist 2", duration: "4:20" },
  { id: 3, title: "Song 3", artist: "Artist 3", duration: "3:15" },
  { id: 4, title: "Song 4", artist: "Artist 4", duration: "5:10" },
  { id: 5, title: "Song 5", artist: "Artist 5", duration: "3:50" },
]
export default function Playlist() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Playlist</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] md:h-[400px] lg:h-[500px]">
          <div className="space-y-4">
            {playlistItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.artist}</p>
                </div>
                <span className="text-sm text-gray-500">{item.duration}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

