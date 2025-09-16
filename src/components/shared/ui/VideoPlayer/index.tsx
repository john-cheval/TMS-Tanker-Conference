"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import React from "react";
import { YoutubeTestimonialsTypes } from "@/types/common";

const YoutubePlayer = (props: YoutubeTestimonialsTypes) => {
  const { youtube_id, title } = props;
  return (
    <div className="w-full h-full">
      <LiteYouTubeEmbed
        id={youtube_id ?? ""}
        title={title ?? ""}
        params="rel=0"
      />
    </div>
  );
};

export default YoutubePlayer;
