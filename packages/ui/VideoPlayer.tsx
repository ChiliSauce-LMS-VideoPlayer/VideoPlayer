// use client 문은 클라이언트 측에서만 사용되어야 하며, 서버 사이드에서는 지원되지 않습니다.
"use client";

// VideoPlayer.tsx

import * as React from "react";
import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  width?: number;
  height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = 640,
  height = 360,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.play();
        console.log("start");
      } else {
        video.pause();
        console.log("pause");
      }
    }
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <div>
      <video
        preload="none"
        ref={videoRef}
        width={width}
        height={height}
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <button onClick={handlePlayPause}>Play/Pause</button>

        <button onClick={handleMuteUnmute}>Mute/Unmute</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
