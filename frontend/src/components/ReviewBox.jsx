import React from "react";
import QuotesIcon from "../assets/images/icons/quotes.png";

const ReviewBox = (props) => {
  return (
    <div
      className="relative text-center p-10 md:w-1/2"
      style={{
        background: "#D7EAE8",
        borderTopLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      }}>
      <img src={QuotesIcon} className="absolute top-0 left-0 w-20" alt="" />
      <img
        src={QuotesIcon}
        className="absolute bottom-0 right-0 rotate-180 w-20"
        alt=""
      />
      <h4>{props.stars}</h4>
      <p className="my-5">{props.paragraph}</p>
      <h5>{props.name}</h5>
    </div>
  );
};

export default ReviewBox;
