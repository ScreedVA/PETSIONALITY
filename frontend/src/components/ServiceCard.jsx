import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function ServiceCard({ icon, title, subtitle }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleExpandClick() {
    setShowDetails(true);
  }
  function handleCollapseClick() {
    setShowDetails(false);
  }
  return (
    <div className="flex flex-col bg-white text-[#288677] p-5 pb-0 gap-5 border border-[#288677] rounded-xl">
      {/* Dog Boarding (Head) */}
      <div className="flex items-center justify-between">
        {/* Dog Boarding (Head/Flex-Left) */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <p className="font-semibold">{title}</p>
        </div>
        {/* Activate Button (Head/Flex-Right) */}
        <div>
          <input type="checkbox" className="checkbox5" />
        </div>
      </div>

      {/* Dog Boarding (Summary) */}
      <div>
        <p>{subtitle}</p>
      </div>

      {/* Dog Boarding (Render Chevron Right or Chevron Down Icon) */}
      <div className="flex items-end justify-end flex-grow cursor-pointer text-m hover:text-[#FF914D]">
        {showDetails ? (
          // onClick toggle details
          <FontAwesomeIcon icon={faChevronDown} onClick={handleCollapseClick} />
        ) : (
          // onClick toggle details
          <FontAwesomeIcon icon={faChevronRight} onClick={handleExpandClick} />
        )}
      </div>

      <form
        action=""
        className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B]  flex flex-col gap-5 relative z-0 ${
          showDetails ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        {/* 1/4 Form */}
        <div className="flex flex-col gap-3">
          <p>How many dogs do you want to host at the same time?</p>
          <div
            className="grid grid-cols-4"
            onChange={(e) => {
              // Ensure only one checkbox is true
              const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach((cb) => {
                if (cb !== e.target) cb.checked = false;
              });
            }}
          >
            {[1, 2, 3, "4+"].map((label) => (
              <div key={label} className="flex flex-grow w-full h-full">
                <input type="checkbox" className="h-10 checkbox2x3" data-label={label} />
              </div>
            ))}
          </div>
        </div>

        {/* 2/4 Form */}
        <div className="flex flex-col gap-2">
          <p>What are your check-in and check-out times?</p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <small>Check-in</small>
              <select id="gender" name="gender" placeholder="Select Gender" className="select2">
                <option value="">I'm Flexible</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <small>Check-out</small>
              <select id="gender" name="gender" placeholder="Select Gender" className="select2">
                <option value="">I'm Flexible</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3/4 Form */}
        <div className="flex flex-col gap-5">
          <p>Do you plan to host dogs from different families at the same time</p>
          <div
            className="grid grid-cols-2"
            onChange={(e) => {
              // Ensure only one checkbox is true
              const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach((cb) => {
                if (cb !== e.target) cb.checked = false;
              });
            }}
          >
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"yes"} />
            </div>
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"no"} />
            </div>
          </div>
        </div>

        {/* 4/4 Form */}
        <div className="flex flex-col gap-5">
          <p>When hosting dogs in your home, how frequently can you provide potty breaks?</p>
          <div
            className="grid grid-cols-4"
            onChange={(e) => {
              // Ensure only one checkbox is true
              const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach((cb) => {
                if (cb !== e.target) cb.checked = false;
              });
            }}
          >
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"0-2 hours"} />
            </div>
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"2-4 hours"} />
            </div>
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"4-6 hours"} />
            </div>
            <div className="flex flex-grow w-full h-full">
              <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"8+ hours"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
