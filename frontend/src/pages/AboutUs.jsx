import React from "react";
import Bg from "../assets/images/bgs/4.png";
import { ourBenefits, reviews } from "../components/Data";
import ReviewBox from "../components/ReviewBox";
import Footer from "../components/Footer";

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
          <h2>What we wanna do</h2>
          <h4 className="max-w-4xl mt-5">
            Our goal with PETSONALITY is to create an intelligent, secure and
            user-friendly platform that helps pet owners to find the perfect pet
            sitter - based on an innovative matching system that harmonizes
            personal characteristics and animal needs.
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

      <div className="wrapper xl:px-28 pb-20 ">
        <p className="sm:text-lg">
          We want to offer a solution to a widespread problem: Pet owners are
          often faced with the question of where to take their pet when they go
          on vacation, are tied up at work or are ill. Conventional boarding
          kennels rarely offer individual care - we, on the other hand, offer a
          personal and coordinated alternative.
          <br />
          <br />
          We not only provide allround service for pet owners, but also a
          fulfilling activity for animal lovers who want to take in animals -
          whether for extra income, an emotional connection or as a try to a
          life with animals.
          <br />
          <br />
          Our vision is sustainable pet care in which the needs of everyone
          involved - whether human or animal - complement each other perfectly.
          <br />
          <br />
          <h4>What we stand for</h4>
          <br /> At PETSONALITY, we focus on the well-being of animals, the
          strengthening of human and animal bonds and a sustainable, smart
          solution. We believe that every pet deserves a temporary home that is
          not only functional, but loving, empathetic and individual. Our
          innovative approach combines modern technology with genuine love for
          animals - for a better quality of life for people and pets.
          <br />
          <br />
          Our values: <br />
          Animal welfare – our focus on everything we do Empathy &
          responsibility - for animals, their owners and pet sitters Innovation
          & transparency - through modern technology and traceable processes
          Sustainability & community - through local placement, resource
          conservation and strong partnerships
          <br />
          <br />
          PETSONALITY is more than a platform - we are a movement towards a more
          responsible and appropriate approach to pet care.
          <br />
          <br />
          <h4>Who we are</h4>
          <br />
          Behind PETSONALITY is a dedicated team of founders who know from their
          own experience how difficult it can be to find trustworthy care for
          your pet. The idea was born as part of a university project - but the
          motivation behind it is deeply rooted in our personal love of animals.
          <br />
          <br />
          We are pet owners ourselves and know about the challenges of everyday
          life, but also about the desire to know that your pet is always in
          good hands.
          <br />
          <br />
          Our strength? We think from the customer's perspective, live empathy,
          combine digital skills with social sensitivity - and have the ambition
          to create an offer that is both technologically strong and close to
          the heart.
        </p>
      </div>

      <h2 className="text-center mb-16">Reviews</h2>
      <div className="wrapper xl:px-28 pb-20  gap-10 grid md:grid-cols-2">
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
      <Footer />
    </div>
  );
};

export default AboutUs;
