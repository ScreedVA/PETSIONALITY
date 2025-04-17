import React from "react";

const PetSitterSearchForm = () => {
  function checkboxClick(e) {
    const { name, checked } = e.target;
    console.log(`${name} is ${checked}`);
  }

  return (
    <div className="petsittersearchform-container h-[500px] p-10 m-1">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 pb-5 bg-white border rounded-lg">
        {/* 1/5 */}
        <div className="flex flex-row gap-5 px-5 py-2 bg-gray-100">
          <p>I'm looking for service for my:</p>
          <div className="flex gap-2">
            <input className="checkbox1" type="checkbox" name="dog" id="dog-check" onClick={checkboxClick} />
            <p>Dog</p>
          </div>
          <div className="flex gap-2">
            <input className="checkbox1" type="checkbox" name="cat" />
            <p>Cat</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5">
          {/* 2/5 */}
          <div className="flex flex-col gap-1">
            <p>For When You're Away</p>
            <div className="flex gap-4">
              <input type="checkbox" className="checkbox2 after:content-['Boarding'] before:content-['\f0f2'] " />
              <input type="checkbox" className="checkbox2 after:content-['House-Sitting'] before:content-['\f015'] " />
              <input type="checkbox" className="checkbox2 after:content-['Drop-In-Visits'] before:content-['\e4c6'] " />
              <input type="checkbox" className="checkbox2 after:content-['Doggy-Day-Care'] before:content-['\f185'] " />
              <input type="checkbox" className="checkbox2 after:content-['Dog-Walking'] before:content-['\f1b0'] " />
            </div>
          </div>

          {/* 3/5 */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <p>How often do you need this service</p>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  className="checkbox3 w-[400px] after:left-10 after:content-['One-Time'] before:content-['\f133'] "
                  name="one-time"
                />
                <input
                  type="checkbox"
                  className="checkbox3 w-[400px] after:left-10 after:content-['Repeat-Weakly'] before:content-['\f363'] "
                  name="repeat-weakly"
                />
              </div>
            </div>
          </div>

          {/* 4/5 */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <p>Start Date</p>
              <div>
                <input type="date" name="start-date" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p>End Date</p>
              <div>
                <input type="date" name="start-date" />
              </div>
            </div>
          </div>

          {/* 5/5 */}
          <div className="flex flex-col">
            <div className="flex gap-4">
              <input
                className="checkbox4 after:content-['0-15-Ibs'] before:content-['Small']"
                type="checkbox"
                name="small-dog"
              />
              <input
                className="checkbox4 after:content-['16-40-Ibs'] before:content-['Medium']"
                type="checkbox"
                name="small-dog"
              />
              <input
                className="checkbox4 after:content-['41-100-Ibs'] before:content-['Large']"
                type="checkbox"
                name="small-dog"
              />
              <input
                className="checkbox4 after:content-['100+-Ibs'] before:content-['Giant']"
                type="checkbox"
                name="small-dog"
              />
              <button className="w-2/4 text-4xl rounded-md button1" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetSitterSearchForm;
