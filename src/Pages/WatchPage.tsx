import React from "react";
import YouTubePlayer from "../components/YouTubePlayer";

interface WatchPageProps {
  videoId: string;
}


const WatchPage: React.FC<WatchPageProps> = ({ videoId }) => {
  return (
    <div
      style={{
        minHeight: "60vh",
        width: "100vw",
        maxWidth: "100vw",
        display: "block",
        background: "#000",
        margin: 0,
        padding: 0,
      }}
    >
      <YouTubePlayer videoId={videoId} autoplay={true} />
    </div>
  );
};

export default WatchPage;
