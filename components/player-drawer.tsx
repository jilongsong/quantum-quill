import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";
import ImageLoader from "./image-loader";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { formatSongTime } from "@/utils/time";
interface PlayerDrawerProps {
  isOpen: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentSong: any;
  seek: (time: number) => void;
  onOpenChange: (open: boolean) => void;
  onPlayPause: () => void;
}

export default function PlayerDrawer({
  isOpen,
  isPlaying,
  currentSong,
  onOpenChange,
  onPlayPause,
  currentTime,
  duration,
  seek,
}: PlayerDrawerProps) {
  const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
      setSliderValue(currentTime);
    }, [currentTime]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };
  const handleSliderCommit = (value: number[]) => {
    seek(value[0]);
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
       {
        currentSong && (
          <div className="mx-auto w-full min-h-full max-w-sm py-4">
          <DrawerHeader>
            <DrawerTitle>Now Playing</DrawerTitle>
            <DrawerDescription>Enjoy your music!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <ImageLoader src={currentSong.picUrl} />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">{currentSong.name}</h2>
                <p className="text-muted-foreground">{currentSong.author}</p>
              </div>
              <div className="w-full h-32 mb-4 overflow-y-scroll">
                <div className="space-y-2 text-center">
                  <p className="text-sm text-muted-foreground">
                    Lyrics will appear here...
                  </p>
                  <p className="text-sm">First line of the lyrics</p>
                  <p className="text-sm font-medium">
                    Second line of the lyrics (active)
                  </p>
                  <p className="text-sm">Third line of the lyrics</p>
                  <p className="text-sm">Fourth line of the lyrics</p>
                  <p className="text-sm">Fifth line of the lyrics</p>
                  <p className="text-sm">Sixth line of the lyrics</p>
                  <p className="text-sm">Seventh line of the lyrics</p>
                  <p className="text-sm">Eighth line of the lyrics</p>
                </div>
              </div>
              <div className="w-full space-y-2">
                <Slider
                  value={[sliderValue]}
                  max={duration * 1000}
                  step={1000}
                  onValueChange={handleSliderChange}
                  onValueCommit={handleSliderCommit}
                />
                <div className="flex justify-between text-sm">
                  <span>{formatSongTime(sliderValue)}</span>
                  <span>{formatSongTime(duration * 1000)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  className="h-14 w-14 rounded-full"
                  onClick={onPlayPause}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8" />
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <SkipForward className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        )
       }
      </DrawerContent>
    </Drawer>
  );
}
