"use client";
// Video.tsx

import React from "react";

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const currentYoutube = React.useRef<HTMLIFrameElement | null>(null);

  const handlePlay = () => {
    if (currentYoutube.current) {
      currentYoutube.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  const handlePause = () => {
    if (currentYoutube.current) {
      currentYoutube.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="video">
      <iframe
        ref={currentYoutube}
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="btnContainer">
        <div className="btnPlay" onClick={handlePlay}>
          재생
        </div>

        <div className="btnPause" onClick={handlePause}>
          일시정지
        </div>
      </div>
    </div>
  );
};

export default Video;
