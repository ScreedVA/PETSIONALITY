import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight, faChevronDown, faSun, faDog, faWalking } from "@fortawesome/free-solid-svg-icons";
import { servicePage } from "./Data";
import HomeServiceCard from "./HomeServiceCard";

export default function Services() {
  const [pageState, setPageState] = useState(servicePage);
  const [reload, setReload] = useState(false);

  function reloadPage() {
    setReload((prev) => !prev);
  }

  useEffect(() => {}, [reload]);

  return (
    <div className="flex flex-col gap-5">
      {/* Dog Boarding */}
      <HomeServiceCard
        icon={faHouse}
        title={"Dog Boarding"}
        subtitle={"You host a client’s dog overnight in your home while they’re away—like a dog hotel, but comfier."}
        reloadParent={reloadPage}
        serviceType={"dog_boarding"}
      />
      {/* Doggy day care*/}
      <HomeServiceCard
        icon={faSun}
        title={"Doggy day care"}
        subtitle={
          "Daytime care and play for dogs, While you’re at work or out for the day. At pet facilities or a sitter’s home."
        }
        reloadParent={reloadPage}
        serviceType={"doggy_day_care"}
      />

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

        {/* Form */}
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
