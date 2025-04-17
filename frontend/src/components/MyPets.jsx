import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { imgs } from "./Data";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { petList as pets } from "./Data";

export default function MyPets() {
  const [pageState, setPageState] = useState(1);
  const [petList, setPetList] = useState(pets);
  return (
    // Renders 'Add Pet' or 'Pet List'
    <>
      {pageState === 0 ? (
        <>
          {/* State 0 - Add Pet*/}
          <div className="w-full h-full">
            <div className="flex items-center justify-start w-full h-full">
              <div className="w-[450px] h-[450px] bg-mint-gradient-light flex flex-col justify-center gap-5 px-20">
                <FontAwesomeIcon icon={faPaw} size={"10x"} color="#49978B" />
                <p className="text-center">Share their name, photo, and a little about what makes them special.</p>
                <button className="button1">Add Pet Profile</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* State 1 - Pet List */}
          <ul className="flex flex-col w-full gap-4 ">
            {/* Pet Card */}
            {petList.map((pet, index) => (
              <li
                key={`${pet.name}-${index}`}
                className="flex w-full gap-3 border px-10 py-4 bg-mint-gradient-light border-[#49978B]"
              >
                <div className={`flex flex-col w-full ${pet.showDetails ? "gap-10" : ""}`}>
                  <div className="flex ">
                    <div className="flex justify-start items-center gap-5 w-[450px]">
                      <img src={pet.img} alt="Dog Image" className="w-20 h-20 rounded-full" />
                      <div className="flex flex-col">
                        <h3>{pet.name}</h3>
                        <p className="text-[#808080] font-semibold text-xs">{pet.description}</p>
                      </div>
                    </div>

                    {/* Render Chevron Right or Chevron Down Icon */}
                    <div className="flex items-end justify-end flex-grow cursor-pointer text-m text-[#49978B] hover:text-[#FF914D]">
                      {pet.showDetails ? (
                        // onClick toggle details
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          onClick={() => {
                            setPetList((prevList) =>
                              prevList.map((p, i) => (i === index ? { ...p, showDetails: !p.showDetails } : p))
                            );
                          }}
                        />
                      ) : (
                        // onClick toggle details
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          onClick={() => {
                            setPetList((prevList) =>
                              prevList.map((p, i) => (i === index ? { ...p, showDetails: !p.showDetails } : p))
                            );
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Expand or Collapse Form */}
                  <form
                    className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B] pb-5 ${
                      pet.showDetails ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex gap-10">
                      {/* Left */}
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Name</label>
                          <input type="text" placeholder="Enter Name" className="input3" />
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                          <label for="cars">Gender:</label>
                          <select id="gender" name="gender" placeholder="Select Gender" className="select1">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Weight</label>
                          <div className="relative w-full">
                            <input
                              type="number"
                              className="w-full input3" // adjust padding-right for space
                              placeholder="Enter weight"
                            />
                            <span className="absolute text-sm text-gray-500 -translate-y-1/2 right-9 top-1/2">kg</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="">Year of birth</label>
                          <input type="text" placeholder="Enter year of birth" className="input3" />
                        </div>
                      </div>

                      {/* Right */}
                      {/* 1/2 */}
                      <div className="flex flex-col w-full gap-3">
                        <div className="flex flex-col w-full">
                          <input
                            type="checkbox"
                            className="checkbox3x2 after:left-12 after:content-['Spayed/Neutered'] before:content-['\e573'] "
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <input
                            type="checkbox"
                            className="checkbox3x2 after:left-12 after:content-['Chipped'] before:content-['\f2db'] "
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <input
                            type="checkbox"
                            className="checkbox3x2 after:left-12 after:content-['Vaccinated'] before:content-['\f48e'] "
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <input
                            type="checkbox"
                            className="checkbox3x2 after:left-12 after:content-['House-Trained'] before:content-['\e509'] "
                          />
                        </div>
                        {/* 2/2 */}
                        <div className="flex flex-col gap-1">
                          <h4 className="font-normal">Friendly with...</h4>
                          <div className="flex w-full gap-3">
                            <div className="flex flex-grow">
                              <input
                                type="checkbox"
                                className=" checkbox2x2 flex-grow after:content-['Dogs'] before:content-['\f6d3'] "
                              />
                            </div>
                            <div className="flex flex-grow">
                              <input
                                type="checkbox"
                                className="checkbox2x2 after:content-['Cats'] before:content-['\f6be'] "
                              />
                            </div>
                            <div className="flex flex-grow">
                              <input
                                type="checkbox"
                                className="checkbox2x2 after:content-['Kids'] before:content-['\f1ae'] "
                              />
                            </div>
                            <div className="flex flex-grow">
                              <input
                                type="checkbox"
                                className="checkbox2x2 after:content-['Adults'] before:content-['\f007'] "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <textarea name="description" id="description" cols={4} className="bg-beige-gradient"></textarea>
                    </div>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
