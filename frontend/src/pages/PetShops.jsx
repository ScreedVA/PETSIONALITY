import React from "react";
import Img1 from "../assets/images/bgs/3.png";
import { shopBoxes } from "../components/Data";

const PetShops = () => {
  return (
    <div>
      <div className=" bg-main-green pt-20">
        <img src={Img1} alt="" className="" />
      </div>
      <div className="wrapper max-w-3xl pt-20 pb-32">
        {shopBoxes.map((item, index) => {
          return (
            <div
              key={index}
              className="flex p-2 rounded-xl gap-6 bg-white mb-5 items-stretch hover:bg-zinc-200/[0.7] sm:flex-row flex-col">
              <div className="img sm:w-40 w-full  shrink-0 rounded-lg ">
                <img src={item.img} alt="" />
              </div>
              <div>
                <h5 className="py-2">{item.name}</h5>
                <p className="mb-2">
                  {item.title} • {item.rating} ({item.reviews} reviews)
                </p>
                <p>{item.text}</p>
                <div className="flex flex-wrap mt-10 gap-2">
                  <a
                    className="bg-white border px-3 py-1 rounded"
                    target="_blank"
                    href={item.location}>
                    Direction
                  </a>
                  <a
                    className="bg-white border px-3 py-1 rounded"
                    target="_blank"
                    href={item.website}>
                    Website
                  </a>
                  <a
                    className="bg-white border px-3 py-1 rounded"
                    href={`tel:${item.tel}`}>
                    Call
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="p-2 rounded-xl bg-white h-80 mt-12">
          {" "}
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109883.5203628609!2d13.391113982924862!3d52.51342616930006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1745313337765!5m2!1sen!2sde"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default PetShops;
