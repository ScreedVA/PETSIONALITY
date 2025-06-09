import React, { useEffect, useState } from "react";
import { useNavbar } from "../services/ContextService";
import Pattern1 from "../assets/images/bgs/1.png";
import { Link } from "react-router-dom";
import { toes, homeVideos } from "../components/Data";
import Img1 from "../assets/images/pets/4.png";
import Footer from "../components/Footer";

const Home = () => {
  const [videoHovered, setVideoHovered] = useState(5);
  const { setNavbarType } = useNavbar();

  useEffect(() => {
    setNavbarType("default");
  }, []);

  return (
    <div className="homePage">
      <section className="relative bg-main-green sm:mb-40 mb-20 pt-32 lg:pb-60 pb-20">
        <img
          className="absolute sm:-bottom-40 -bottom-20 left-0 w-full"
          src={Img1}
          alt=""
        />
        <div className="relative wrapper text-center max-w-3xl md:py-10">
          <h2 className="font-bold mb-7">Match your best buddy!</h2>
          <h4>Haustierbetreuung, die wirklich passt.</h4>
        </div>
      </section>

      <section className="wrapper max-w-3xl pb-32 ">
        <h2 className="text-center mb-10">Title of this section?</h2>
        <div>
          Viele Haustierbesitzer stehen vor dem Problem, eine verlässliche
          Betreuung für ihr Tier zu finden. PETSONALITY verbindet Tierfreunde
          über ein KI-basiertes Matching-System basierend auf Persönlichkeit und
          Bedürfnissen – für eine Betreuung, die genauso individuell ist wie
          dein Tier und genau dort, wo es sich wirklich wohlfühlt.
        </div>
      </section>
      <section className="relative w-screen h-screen">
        <div className="flex items-center justify-center w-full h-full py-20">
          <div className="absolute w-full h-full bg-main-green opacity-40 left-0 top-0"></div>
          <img
            className="absolute left-0 top-0 w-full !h-full object-cover "
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
                    className="relative flex items-center justify-center overflow-hidden toe">
                    <img
                      className="absolute top-0 left-0 object-cover w-full h-full"
                      src={item.img}
                      alt=""
                    />
                    <h3>{item.label}</h3>
                  </Link>
                );
              })}
            </div>
            <div className={`main ${videoHovered != 5 ? "hovered" : ""}`}>
              <video
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
                src={homeVideos[videoHovered]}></video>
              <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                What are you looking for?
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
