import React from "react";

export default function SitterInfo() {
  return (
    <div className="flex flex-col gap-3">
      {/* 1/3 */}
      <div className="flex flex-col gap-3">
        {/* Head */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>What type of building do you live in?</h5>
        </div>
        {/* Body/Grid */}
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
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"House"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"Apartment"} />
          </div>
        </div>
      </div>

      {/*2/3 */}
      <div className="flex flex-col gap-3">
        {/* Head */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>Does anyone smoke inside your house?</h5>
        </div>
        {/* Body/Grid */}
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
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"Smoking"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"No Smoking"} />
          </div>
        </div>
      </div>

      {/* 3/3 */}
      <div className="flex flex-col gap-3">
        {/* Head */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>Does your home have children?</h5>
        </div>
        {/* Body/Grid */}
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
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"Children"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3`} data-label={"No Children"} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="button2">Save Changes</button>
      </div>
    </div>
  );
}
