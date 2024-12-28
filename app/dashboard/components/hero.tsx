"use client";
import { useEffect, useState } from "react";
import { queryHotArtists } from "@/api/songs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Activity } from "lucide-react"; 

export default function Hero() {
  const [artists, setArtists] = useState([]);

  const querySliderList = async () => {
    try {
      const { artists } = await queryHotArtists();
      setArtists(artists);
    } catch (error) {
      console.error("Error fetching slider list:", error);
    }
  };

  useEffect(() => {
    querySliderList();
  }, []);

  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {artists.map((slide: any) => (
          <CarouselItem key={slide.id          }>
            <Card className="transition-all duration-300 ease-in-out">
              <CardContent className="flex items-center justify-center p-0 rounded overflow-hidden relative">
                <img
                  className="w-full h-full object-contain"
                  src={slide.picUrl}
                  alt=""
                />
                <div className="absolute text-xl font-bold top-4 right-4">{slide.name}</div>
                <div className="absolute text-xs top-12 right-4">{slide.musicSize}首</div>
                <div className="absolute text-xl font-bold bottom-6 left-6">
                <Button size="icon" className="h-16 w-16 rounded-full">
                 <Activity strokeWidth={2} size={32} />
                </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
