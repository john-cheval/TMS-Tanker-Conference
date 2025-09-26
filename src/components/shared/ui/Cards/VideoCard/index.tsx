// components/VideoCard.tsx
"use client";
import React, { useState } from "react";
import YoutubePlayer from "@/components/shared/ui/VideoPlayer";

interface VideoCardProps {
  title: string;
  link: string;
  youtube_id: string;
  //   isActive: boolean;
  //   onPlay: () => void;
}

const VideoCard = ({ title, youtube_id }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative  overflow-hidden">
      <div onClick={() => setIsPlaying(true)}>
        <YoutubePlayer youtube_id={youtube_id} title={title} />
      </div>

      {/* <div
        className={`
          absolute bottom-0 left-0 w-full h-full max-h-[100px] 
          bg-gradient-to-b from-transparent to-black transition-opacity duration-300
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      />

      <p
        className={`
          overlay-description absolute bottom-3 left-4 text-white font-bold transition-opacity duration-300 z-10
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      >
        {title}
      </p> */}
    </div>
  );
};

export default VideoCard;
