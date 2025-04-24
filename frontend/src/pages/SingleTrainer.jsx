import React from "react";
import Trainer3 from "../assets/images/trainers/3.png";

const SingleTrainer = () => {
  return (
    <div>
      <div className="wrapper bg-white">
        <div
          className="flex p-20 gap-10"
          style={{
            background: "#D7EAE8",
          }}>
          <div className="img rounded-2xl">
            <img src={Trainer3} alt="" />
          </div>
          <div>
            <h4>Steven Spielberg</h4>
            <p>
              Dog Trainer
              <br /> <br />
              Specialty: aggressive dogs experience: 8 years
              <br /> <br />
              Is it worth getting a trainer for a dog? Absolutely! Investing in
              professional training for your furry friend is like giving them
              the gift of communication. It's not just about obedience; it's
              about building a deeper bond. Trained dogs are happier, more
              confident, and safer companions. Plus, it fosters mutual respect
              and understanding.
              <br /> <br />
              Tel: +49 1726887289 email: steven@dogtrainer instagram:
              steventrain Youtube: traindog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrainer;
