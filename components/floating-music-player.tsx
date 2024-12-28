"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import PlayerDrawer from "./player-drawer";
import { useMusicPlayer } from "../hooks/useMusicPlayerProvider";
import { formatSongTime } from "@/utils/time";

export default function FloatingMusicPlayer() {
  const { currentSong, isPlaying, togglePlay, currentTime, duration, seek } =
    useMusicPlayer();

  const [sliderValue, setSliderValue] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const handleDrawerOpenChange = (open: boolean) => setIsDrawerOpen(open);

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
    <>
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center justify-between w-full sm:w-auto sm:order-1">
              <div className="flex items-center space-x-2">
                <div
                  className="w-10 h-10 bg-gray-200 rounded-md shrink-0 cursor-pointer"
                  onClick={openDrawer}
                  style={{
                    backgroundImage: `url(${currentSong?.picUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">
                    {currentSong?.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {currentSong?.author}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-between items-center gap-2">
              <div className="flex justify-between text-sm">
                <span>{formatSongTime(sliderValue)}</span>
              </div>
              <Slider
                value={[sliderValue]}
                max={duration * 1000}
                step={1000}
                onValueChange={handleSliderChange}
                onValueCommit={handleSliderCommit}
                className="flex-grow"
              />
              <div className="flex justify-between text-sm">
                <span>{formatSongTime(duration * 1000)}</span>
              </div>
            </div>
          </div>
          <PlayerDrawer
            isOpen={isDrawerOpen}
            isPlaying={isPlaying}
            onOpenChange={handleDrawerOpenChange}
            onPlayPause={togglePlay}
            currentTime={currentTime}
            duration={duration}
            seek={seek}
            currentSong={currentSong}
          />
        </div>
      )}
    </>
  );
}
