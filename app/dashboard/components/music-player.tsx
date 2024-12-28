'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Song Title</h2>
            <p className="text-sm text-gray-500">Artist Name</p>
          </div>
          <div className="space-y-2">
            <Slider defaultValue={[33]} max={100} step={1} />
            <div className="flex justify-between text-sm">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4" />
            <Slider defaultValue={[50]} max={100} step={1} className="flex-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

