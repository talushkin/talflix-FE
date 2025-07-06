import React from "react";

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, autoplay = true }) => {
  return (
    <div style={{ width: "100vw", maxWidth: "100vw", aspectRatio: "16/9", background: "#000", margin: 0, padding: 0 }}>
      <iframe
        title="YouTube Video Player"
        width="100%"
        height="100%"
        style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
