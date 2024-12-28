"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Howl } from "howler";
import { queryMusic, queryMusicDetail } from "../api/songs";

interface Song {
  id: string;
  name: string;
  author: string;
  url: string;
  picUrl: string;
  duration: number;
}

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  setCurrentSongId: (id: string) => Promise<void>;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  nextSong: () => void;
  previousSong: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
  undefined
);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const fetchSongData = useCallback(async (id: string) => {
    try {
      const [musicResponse, detailResponse] = await Promise.all([
        queryMusic({ id, level: "standard" }),
        queryMusicDetail({ ids: id }),
      ]);
      setIsPlaying(false);

      const { data } = musicResponse;
      const { songs } = detailResponse;

      if (data[0] && songs[0]) {
        return {
          id: data[0].id,
          url: data[0].url,
          duration: data[0].time,
          name: songs[0].name,
          picUrl: songs[0].al.picUrl,
          author: songs[0].ar[0].name,
        };
      }
      throw new Error("Failed to fetch song data");
    } catch (error) {
      console.error("Error fetching song data:", error);
      throw error;
    }
  }, []);

  const initializeHowl = useCallback(
    (song: Song) => {
      if (howl) {
        howl.unload();
      }

      const newHowl = new Howl({
        src: [song.url],
        html5: true,
        volume: volume,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onend: () => setIsPlaying(false),
        onload: () => setDuration(newHowl.duration()),
      });

      setHowl(newHowl);
      setCurrentSong(song);
      setDuration(song.duration / 1000); // Convert milliseconds to seconds
    },
    [howl, volume]
  );

  const setCurrentSongId = useCallback(
    async (id: string) => {
      try {
        const songData = await fetchSongData(id);
        initializeHowl(songData);
      } catch (error) {
        console.error("Error setting current song:", error);
      }
    },
    [fetchSongData, initializeHowl]
  );

  useEffect(() => {
    if (howl) {
      const updateTime = () => {
        setCurrentTime((howl.seek() as number) * 1000); // Convert seconds to milliseconds
      };
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [howl]);

  const play = useCallback(() => {
    if (howl) {
      howl.play();
    }
  }, [howl]);

  const pause = useCallback(() => {
    if (howl) {
      howl.pause();
    }
  }, [howl]);

  const togglePlay = useCallback(() => {
    if (howl) {
      if (isPlaying) {
        howl.pause();
      } else {
        howl.play();
      }
    }
  }, [howl, isPlaying]);

  const seek = useCallback(
    (time: number) => {
      if (howl) {
        howl.seek(time / 1000); // Convert milliseconds to seconds for Howler
      }
    },
    [howl]
  );

  const setVolumeAndUpdateHowl = useCallback(
    (newVolume: number) => {
      setVolume(newVolume);
      if (howl) {
        howl.volume(newVolume);
      }
    },
    [howl]
  );

  const nextSong = useCallback(() => {
    // Implement logic to play the next song
    console.log("Next song");
  }, []);

  const previousSong = useCallback(() => {
    // Implement logic to play the previous song
    console.log("Previous song");
  }, []);

  const contextValue: MusicPlayerContextType = {
    currentSong,
    isPlaying,
    duration,
    currentTime,
    volume,
    setCurrentSongId,
    play,
    pause,
    togglePlay,
    seek,
    setVolume: setVolumeAndUpdateHowl,
    nextSong,
    previousSong,
  };

  return (
    <MusicPlayerContext.Provider value={contextValue}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
