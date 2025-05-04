import React from "react";
import { useState } from "react";

const Question = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-beige p-3 mb-6 cursor-pointer">
      <div className="flex justify-between items-center gap-2">
        <div className="text-sm">{q}</div>
        <div className="text-3xl">{open ? "-" : "+"}</div>
      </div>
      <p className={open ? "block p-4 text-green-800" : "hidden"}>{a}</p>
    </div>
  );
};

export default Question;
