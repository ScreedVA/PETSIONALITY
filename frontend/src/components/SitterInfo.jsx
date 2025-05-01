import React from "react";

export default function SitterInfo() {
  return (
    <div className="flex flex-col gap-3">
      {/* 1/5 */}
      <div className="flex flex-col gap-3">
        {/* Head */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>What size dogs do you want to sit?</h5>
        </div>
        {/* Body/Grid */}
        <div className="grid grid-cols-4">
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 rounded-lg `} data-label={"0-10 kgs"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={"11-25 kgs"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={"26-45 kgs"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={">45 kgs"} />
          </div>
        </div>
      </div>

      {/* 2/5 */}
      <div className="flex flex-col gap-3">
        {/* Head */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>What ages of dogs do you want to sit?</h5>
        </div>
        {/* Body/Grid */}
        <div className="grid grid-cols-3">
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={"<1 year"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={"1-8 years"} />
          </div>
          <div className="flex flex-grow w-full h-full">
            <input type="checkbox" className={`h-20 checkbox2x3 `} data-label={"8+ years"} />
          </div>
        </div>
      </div>

      {/* 3/5 */}
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

      {/*4/5 */}
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

      {/* 5/5 */}
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
