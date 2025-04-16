import React, { useEffect, useState } from "react";
import { useNavbar } from "../services/ContextService";
import Pattern1 from "../assets/images/bgs/1.jpg";
import { Link } from "react-router-dom";
import { toes, homeVideos } from "../components/Data";

const Home = () => {
  const [videoHovered, setVideoHovered] = useState(5);
  const { setNavbarType } = useNavbar();

  useEffect(() => {
    setNavbarType("default");
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <img className="absolute left-0 top-0 w-full !h-full object-cover opacity-10" src={Pattern1} alt="" />
        <div className="paw z-100">
          <div className="flex justify-between">
            {toes.map((item, i) => {
              return (
                <Link
                  onMouseOver={() => setVideoHovered(i)}
                  onMouseLeave={() => setVideoHovered(5)}
                  key={i}
                  to={item.link}
                  className="relative flex items-center justify-center overflow-hidden toe"
                >
                  <img className="absolute top-0 left-0 object-cover w-full h-full" src={item.img} alt="" />
                  <h1>{item.label}</h1>
                </Link>
              );
            })}
          </div>
          <div className={`main ${videoHovered != 5 ? "hovered" : ""}`}>
            <video autoPlay muted loop className="object-cover w-full h-full" src={homeVideos[videoHovered]}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
