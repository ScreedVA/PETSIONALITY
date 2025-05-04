import React from "react";
import { questions } from "../components/Data";
import Question from "../components/Question";

const FAQs = () => {
  return (
    <div className="pt-32 bg-main-green min-h-screen">
      <div className="wrapper max-w-4xl pb-20">
        <h2 className="text-center mb-10">FAQs</h2>

        {questions.map((item, index) => {
          return <Question key={index} q={item.q} a={item.a} />;
        })}
      </div>
    </div>
  );
};

export default FAQs;
