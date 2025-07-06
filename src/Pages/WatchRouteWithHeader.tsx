import React from "react";
import HeaderBar from "../components/HeaderBar";
import WatchPage from "./WatchPage";
import { useParams } from "react-router-dom";

const WatchRouteWithHeader: React.FC = () => {
  const params = useParams();
  const videoId = params && typeof params.videoId === 'string' ? params.videoId : undefined;
  return (
    <>
      <HeaderBar
        logo={"/logo192.png"}
        onHamburgerClick={() => {}}
        genres={[]}
        desktop={true}
        setSelectedGenre={() => {}}
        setSelectedSong={() => {}}
        selectedSong={null}
        isDarkMode={true}
      />
      {videoId ? <WatchPage videoId={videoId} /> : null}
    </>
  );
};

export default WatchRouteWithHeader;
