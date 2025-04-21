import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight, faChevronDown, faSun, faDog, faWalking } from "@fortawesome/free-solid-svg-icons";
import { servicePage } from "./Data";

export default function Services() {
  const [pageState, setPageState] = useState(servicePage);

  return (
    <div className="flex flex-col gap-5">
      {/* Dog Boarding */}
      <div className="flex flex-col bg-white text-[#288677] p-5 pb-0 gap-5 border border-[#288677] rounded-xl">
        {/* Dog Boarding (Head) */}
        <div className="flex items-center justify-between">
          {/* Dog Boarding (Head/Flex-Left) */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} />
            <p className="font-semibold">Dog Boarding</p>
          </div>
          {/* Dog Boarding (Head/Flex-Right) */}
          <div>
            <input type="checkbox" className="checkbox5" />
          </div>
        </div>

        {/* Dog Boarding (Summary) */}
        <div>
          <p>You host a client’s dog overnight in your home while they’re away—like a dog hotel, but comfier.</p>
        </div>

        {/* Dog Boarding (Render Chevron Right or Chevron Down Icon) */}
        <div className="flex items-end justify-end flex-grow cursor-pointer text-m hover:text-[#FF914D]">
          {pageState.dogBoarding.showDetails ? (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dogBoarding: {
                    ...prevState.dogBoarding,
                    showDetails: !prevState.dogBoarding.showDetails,
                  },
                }));
              }}
            />
          ) : (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dogBoarding: {
                    ...prevState.dogBoarding,
                    showDetails: !prevState.dogBoarding.showDetails,
                  },
                }));
              }}
            />
          )}
        </div>

        <form
          action=""
          className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B]  flex flex-col gap-5 relative z-0 ${
            pageState.dogBoarding.showDetails ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
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

            <div className="grid grid-cols-2 gap-10">
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

      {/* Doggy day care*/}
      <div className="flex flex-col bg-white text-[#288677] p-5 pb-0 gap-5 border border-[#288677] rounded-xl">
        {/* Doggy day care (Head) */}
        <div className="flex items-center justify-between">
          {/* Doggy day care (Head/Flex-Left) */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSun} />
            <p className="font-semibold">Doggy day care</p>
          </div>
          {/* Doggy day care (Head/Flex-Right) */}
          <div>
            <input type="checkbox" className="checkbox5" />
          </div>
        </div>

        {/* Doggy day care (Summary) */}
        <div>
          <p>
            Daytime care and play for dogs, While you’re at work or out for the day. At pet facilities or a sitter’s
            home.
          </p>
        </div>

        {/* Doggy day care (Render Chevron Right or Chevron Down Icon) */}
        <div className="flex items-end justify-end flex-grow cursor-pointer text-m hover:text-[#FF914D]">
          {pageState.doggyDaycare.showDetails ? (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  doggyDaycare: {
                    ...prevState.doggyDaycare,
                    showDetails: !prevState.doggyDaycare.showDetails,
                  },
                }));
              }}
            />
          ) : (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  doggyDaycare: {
                    ...prevState.doggyDaycare,
                    showDetails: !prevState.doggyDaycare.showDetails,
                  },
                }));
              }}
            />
          )}
        </div>

        <form
          action=""
          className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B]  flex flex-col gap-5 relative z-0 ${
            pageState.doggyDaycare.showDetails ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
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

            <div className="grid grid-cols-2 gap-10">
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

      {/* Drop-in Visits */}
      <div className="flex flex-col bg-white text-[#288677] p-5 pb-0 gap-5 border border-[#288677] rounded-xl">
        {/* Drop-in Visits (Head) */}
        <div className="flex items-center justify-between">
          {/* Drop-in Visits (Head/Flex-Left) */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDog} />
            <p className="font-semibold">Drop-in Visits</p>
          </div>
          {/* Drop-in Visits (Head/Flex-Right) */}
          <div>
            <input type="checkbox" className="checkbox5" />
          </div>
        </div>

        {/* Drop-in Visits (Summary) */}
        <div>
          <p>
            You visit a client’s home briefly (usually 30 mins) to feed, play with, and check on their pet—without
            staying overnight.
          </p>
        </div>

        {/* Drop-in Visits (Render Chevron Right or Chevron Down Icon) */}
        <div className="flex items-end justify-end flex-grow cursor-pointer text-m hover:text-[#FF914D]">
          {pageState.dropInVisits.showDetails ? (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dropInVisits: {
                    ...prevState.dropInVisits,
                    showDetails: !prevState.dropInVisits.showDetails,
                  },
                }));
              }}
            />
          ) : (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dropInVisits: {
                    ...prevState.dropInVisits,
                    showDetails: !prevState.dropInVisits.showDetails,
                  },
                }));
              }}
            />
          )}
        </div>

        <form
          action=""
          className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B]  flex flex-col gap-5 relative z-0 ${
            pageState.dropInVisits.showDetails ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          {/* 1/3 Form */}
          <div className="flex flex-col gap-3">
            <p>What is the maximum distance you will travel to get to a client's home?</p>
            <div className="flex items-center gap-3">
              <select id="gender" name="gender" placeholder="Select Gender" className="w-64 select2">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>
              <p>km</p>
            </div>
          </div>

          {/* 2/3 Form */}
          <div className="flex flex-col gap-2">
            <p>How many drop-in visits can you do per day?</p>

            <div className="flex items-center gap-3">
              <select id="gender" name="gender" placeholder="Select Gender" className="w-64 select2">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5+</option>
              </select>
              <p>visits</p>
            </div>
          </div>

          {/* 3/3 Form */}
          <div className="flex flex-col gap-5">
            <p>What times are you availiable for Drop In Visits(check all that apply)?</p>
            <div className="grid grid-cols-3">
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"06:00-11:00"} />
              </div>
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"11:00-15:00"} />
              </div>
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"15:00-22:00"} />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Dog Walking */}
      <div className="flex flex-col bg-white text-[#288677] p-5 pb-0 gap-5 border border-[#288677] rounded-xl">
        {/* 1/4 Dog Walking (Head) */}
        <div className="flex items-center justify-between">
          {/* Dog Walking (Head/Left) */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWalking} />
            <p className="font-semibold">Dog Walking</p>
          </div>
          {/* Dog Walking (Head/Right) */}
          <div>
            <input type="checkbox" className="checkbox5" />
          </div>
        </div>

        {/* 2/4 Dog Walking (Summary) */}
        <div>
          <p>You walk a client’s dog for a set amount of time (20–60 mins), typically around the neighborhood.</p>
        </div>

        {/* 3/4 Dog Walking (Render Chevron Right or Chevron Down Icon) */}
        <div className="flex items-end justify-end flex-grow cursor-pointer text-m hover:text-[#FF914D]">
          {pageState.dogWalking.showDetails ? (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dogWalking: {
                    ...prevState.dogWalking,
                    showDetails: !prevState.dogWalking.showDetails,
                  },
                }));
              }}
            />
          ) : (
            // onClick toggle details
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => {
                setPageState((prevState) => ({
                  ...prevState,
                  dogWalking: {
                    ...prevState.dogWalking,
                    showDetails: !prevState.dogWalking.showDetails,
                  },
                }));
              }}
            />
          )}
        </div>

        {/* 4/4 Form (Expandable) */}
        <form
          action=""
          className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B]  flex flex-col gap-5 relative z-0 ${
            pageState.dogWalking.showDetails ? "max-h-[700px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          {/* 1/3 Form */}
          <div className="flex flex-col gap-3">
            <p>What is the maximum distance you will travel to get to a client's home?</p>
            <div className="flex items-center gap-3">
              <select id="gender" name="gender" placeholder="Select Gender" className="w-64 select2">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>
              <p>km</p>
            </div>
          </div>

          {/* 2/3 Form */}
          <div className="flex flex-col gap-2">
            <p>How many walks can you do per day?</p>

            <div className="flex items-center gap-3">
              <select id="gender" name="gender" placeholder="Select Gender" className="w-64 select2">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5+</option>
              </select>
              <p>visits</p>
            </div>
          </div>

          {/* 3/3 Form */}
          <div className="flex flex-col gap-5">
            <p>What times are you availiable for Dog Walking(check all that apply)?</p>
            <div className="grid grid-cols-3">
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"06:00-11:00"} />
              </div>
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"11:00-15:00"} />
              </div>
              <div className="flex flex-grow w-full h-full">
                <input type="checkbox" className={`h-10 checkbox2x3`} data-label={"15:00-22:00"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
