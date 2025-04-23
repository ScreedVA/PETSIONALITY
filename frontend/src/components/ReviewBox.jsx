import React from "react";
import QuotesIcon from "../assets/images/icons/quotes.png";

const ReviewBox = (props) => {
  return (
    <div className="relative text-center">
      <h4>{props.stars}</h4>
      <p>{props.paragraph}</p>
      <h4>{props.name}</h4>
    </div>
  );
};

export default ReviewBox;
