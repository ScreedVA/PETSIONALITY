import React from "react";
import Trainer3 from "../assets/images/trainers/3.png";
import { reviews } from "../components/Data";
import ReviewBox from "../components/ReviewBox";

const SingleTrainer = () => {
  return (
    <div className="py-32">
      <div className="wrapper bg-white pb-20">
        <div
          className="flex lg:p-20 p-5 gap-10 md:flex-row flex-col"
          style={{
            background: "#D7EAE8",
          }}>
          <div className="img rounded-lg md:w-1/3 shrink-0">
            <img src={Trainer3} alt="" />
          </div>
          <div>
            <h4>Steven Spielberg</h4>
            <p>
              Dog Trainer
              <br /> <br />
              Specialty: aggressive dogs
              <br />
              experience: 8 years
              <br />
              <br />
              Is it worth getting a trainer for a dog? Absolutely! Investing in
              professional training for your furry friend is like giving them
              the gift of communication. It's not just about obedience; it's
              about building a deeper bond. Trained dogs are happier, more
              confident, and safer companions. Plus, it fosters mutual respect
              and understanding.
              <br /> <br />
              Tel: +49 1726887289
              <br />
              email: steven@dogtrainer
              <br />
              instagram: steventrain
              <br />
              Youtube: traindog
            </p>
          </div>
        </div>

        <h3 className="text-center my-16">Reviews</h3>
        <div className="lg:px-20 px-5 pb-20 flex gap-10 md:flex-row flex-col">
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
        <div className="lg:px-20 px-5">
          <h3>Mybe some texts here idk</h3> <br /> <br />
          <p>
            Is it worth getting a trainer for a dog?
            <br />
            Is it worth getting a trainer for a dog?
            <br /> <br />
            Absolutely! Investing in professional training for your furry friend
            is like giving them the gift of communication. It's not just about
            obedience; it's about building a deeper bond. Trained dogs are
            happier, more confident, and safer companions. Plus, it fosters
            mutual respect and understanding. Is it worth getting a trainer for
            a dog?
            <br />
            Absolutely! Investing in professional training for your furry friend
            is like giving them the gift of communication. It's not just about
            obedience; it's about building a deeper bond. Trained dogs are
            happier, more confident, and safer companions. Plus, it fosters
            mutual respect and understanding.
            <br /> <br />
            Is it worth getting a trainer for a dog?
            <br />
            Absolutely! Investing in professional training for your furry friend
            is like giving them the gift of communication. It's not just about
            obedience; it's about building a deeper bond. Trained dogs are
            happier, more confident, and safer companions. Plus, it fosters
            mutual respect and understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTrainer;
