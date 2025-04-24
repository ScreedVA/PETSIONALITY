import React from "react";
import Bg from "../assets/images/bgs/4.png";
import { ourBenefits, reviews } from "../components/Data";
import ReviewBox from "../components/ReviewBox";

const AboutUs = () => {
  return (
    <div className="bg-main-green">
      <div className="relative bg-white">
        <img
          src={Bg}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
          alt=""
        />
        <div className="wrapper sm:pt-40 pt-32 pb-60 xl:px-28">
          <h2>We are...</h2>
          <h4 className="max-w-4xl mt-5">
            a platform that connects pet owners with trusted, AI-matched pet
            sitters for personalized care. Our AI technology ensures the perfect
            sitter for your pet’s unique needs, while real-time updates keep you
            connected. With easy booking and flexible scheduling, we make pet
            care convenient and reliable—so you can rest easy knowing your pet
            is in good hands.
          </h4>
        </div>
      </div>

      <div className="wrapper flex justify-center xl:gap-16 gap-6 -translate-y-32 xl:px-28 flex-wrap lg:flex-nowrap">
        {ourBenefits.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-beige text-center px-6 py-10 max-w-sm">
              <div className="flex items-center justify-center bg-main-green rounded-full w-40 h-40 p-10 mx-auto">
                <img src={item.icon} alt="" />
              </div>
              <h4 className="mt-5 mb-10 whitespace-nowrap">{item.title}</h4>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </div>

      <div className="wrapper xl:px-28 pb-20">
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Lorem Ipsum is
          <br />
          <br />
          <strong>Some Title here</strong>
          <br />
          <br /> simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever{" "}
        </h5>
      </div>

      <h2 className="text-center mb-16">Reviews</h2>
      <div className="wrapper xl:px-28 pb-20 flex gap-10 md:flex-row flex-col">
        {reviews.map((item, index) => {
          return (
            <ReviewBox
              key={index}
              stars={item.stars}
              paragraph={item.text}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
