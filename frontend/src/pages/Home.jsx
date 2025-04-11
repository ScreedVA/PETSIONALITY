import React, { useState } from "react";
import Pattern1 from "../assets/images/bgs/1.jpg";
import { Link } from "react-router-dom";
import { toes, homeVideos } from "../components/Data";

const Home = () => {
  const [videoHovered, setVideoHovered] = useState(5);

  return (
    <div className="h-screen w-screen relative">
      <div className="flex items-center justify-center h-full w-full">
        <img
          className="absolute left-0 top-0 w-full !h-full object-cover opacity-10"
          src={Pattern1}
          alt=""
        />
        <div className="paw z-100">
          <div className="flex justify-between">
            {toes.map((item, i) => {
              return (
                <Link
                  onMouseOver={() => setVideoHovered(i)}
                  onMouseLeave={() => setVideoHovered(5)}
                  key={i}
                  to={item.link}
                  className="toe flex items-center justify-center relative overflow-hidden">
                  <img
                    className="absolute left-0 top-0 w-full h-full object-cover"
                    src={item.img}
                    alt=""
                  />
                  <h1>{item.label}</h1>
                </Link>
              );
            })}
          </div>
          <div className={`main ${videoHovered != 5 ? "hovered" : ""}`}>
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src={homeVideos[videoHovered]}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
