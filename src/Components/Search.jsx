import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import styled from "styled-components";
export default function Search() {
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("");

  function Handleclick() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  return (
    <div>
      <div className="search">
        <input
          onChange={(e) => {
            setVideo(e.target.value);
            e.preventDefault();
          }}
        ></input>
        <button onClick={Handleclick}>Go</button>
        {videoURL && (
          <Mess>
            <ReactPlayer
              width="100%"
              height="70%"
              url={videoURL}
              controls={true}
            />
          </Mess>
        )}
      </div>
    </div>
  );
}
const Mess = styled.div`
  margin-top: 110vh;
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin-left: 870px;
  @media (max-width: 768px) {
    display: absolute;
    position: absolute;
    margin-left: -75px;
    height: 70vh;
    width: 100vw;
  }
`;
