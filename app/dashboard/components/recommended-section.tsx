'use client'
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import ImageLoader from "@/components/image-loader";
import { queryRecommendSongs } from "@/api/songs";
import { useMusicPlayer } from "@/hooks/useMusicPlayerProvider";
import { HeartPulseIcon } from 'lucide-react'
import { Button } from "@/components/ui/button";
export default function RecommendedSection() {
  const { setCurrentSongId } = useMusicPlayer();

  const [playList, setPlayList] = useState([]);

  const getPlayList = async () => {
    const { result } = await queryRecommendSongs();
    setPlayList(result);
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-4">Recommendation</h2>
      <Card>
          {playList?.map((song: any, index) => (
            <div className="flex items-center justify-between gap-2 p-2" onClick={() => setCurrentSongId(song.id)} key={index}>
              <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden">
                <ImageLoader src={song.picUrl} alt="" />
              </div>
              <div className="flex-auto flex flex-col gap-1">
              <div>{song.name}</div>
             <div className="flex gap-1">
             {
                song.song.artists.map((artist: any, index: number) => (
                  <span key={index} className="text-sm text-gray-500">{artist.name}</span>
                ))
              }
             </div>
              </div>
              <div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                  <HeartPulseIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
      </Card>
    </section>
  );
}
