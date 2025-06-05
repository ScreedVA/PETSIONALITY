import React, { useEffect, useState } from "react";
import { faChevronRight, faChevronDown, faShieldDog, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";
import { getMyPet } from "../services/http/Pet";
import { isFriendlyWithField } from "../services/CommonService";

export default function PetCard({ pet, index, setPetList, petList, setPageState }) {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // Skip load state for new Pet Entry
    if (pet.new) setLoading(false);

    console.log("pet list", petList);
    console.log(petList.length);
  }, []);

  async function handleClickExpand() {
    setPetList((prevList) => prevList.map((p, i) => (i === index ? { ...p, showDetails: !p.showDetails } : p)));
    try {
      let response;
      if (!pet.new) response = await getMyPet({ id: pet.id });
      setFormData(response);
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
    } finally {
      setLoading(false);
    }
  }

  async function handleClickCollapse() {
    setPetList((prevList) => prevList.map((p, i) => (i === index ? { ...p, showDetails: !p.showDetails } : p)));
    if (petList.length < 1) setPageState("Add Pet");
  }

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target || {};

    setFormData((prevFields) => {
      if (isFriendlyWithField(name)) {
        return {
          ...prevFields,
          friendly_with: {
            ...prevFields.friendly_with,
            [name]: checked,
          },
        };
      }

      return {
        ...prevFields,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleSaveChangesClick(event) {
    event.preventDefault();
  }

  function handleCancelClick() {
    setPetList((prevList) => {
      const updatedList = prevList.filter((_, i) => i !== index);

      // Now we can safely act on the new list
      if (updatedList.length < 1) {
        setPageState("Add Pet");
      }

      return updatedList;
    });
  }

  return (
    <li key={`${pet.name}-${index}`} className="flex w-full gap-3 border px-10 py-4  border-[#49978B]">
      <div className={`flex flex-col w-full ${pet.showDetails ? "gap-10" : ""}`}>
        {/* Card Summary */}
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-5 w-[450px]">
            {pet.img ? (
              <img src={pet.img} alt="Dog Image" className="w-20 h-20 rounded-full" />
            ) : (
              <FontAwesomeIcon icon={faShieldDog} size="3x" color="#49978B" />
            )}

            <div className="flex flex-col">
              <h3>{pet.name || formData?.name}</h3>
              <p className="text-[#808080] font-semibold text-xs">{pet.description || formData?.description}</p>
            </div>
          </div>

          {/* Render Chevron Right or Chevron Down Icon or Cancel Icon */}
          <div className="flex flex-col justify-end h-full cursor-pointer text-m text-[#49978B] hover:text-[#FF914D]">
            {pet.new ? (
              <FontAwesomeIcon icon={faXmark} onClick={handleCancelClick} />
            ) : (
              <>
                {pet.showDetails ? (
                  // onClick toggle details
                  <FontAwesomeIcon icon={faChevronDown} onClick={handleClickCollapse} className="" />
                ) : (
                  // onClick toggle details
                  <FontAwesomeIcon icon={faChevronRight} onClick={handleClickExpand} />
                )}
              </>
            )}
          </div>
        </div>

        {/* FORM - Expand or Collapse  */}

        <form
          className={`w-full overflow-hidden duration-400 ease-in-out text-[#49978B] pb-5 flex flex-col gap-5 relative z-0 ${
            pet.showDetails ? "max-h-[1200px] md:max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="flex flex-col gap-10 md:flex-row">
                {/* Left */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="input3"
                      value={formData?.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <label htmlFor="cars">Gender:</label>
                    <select
                      id="gender"
                      name="gender"
                      placeholder="Select Gender"
                      className="select1"
                      value={formData?.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Weight</label>
                    <div className="relative flex flex-col">
                      <select
                        id="size"
                        name="size"
                        placeholder="Select Weight"
                        className="select1"
                        value={formData?.size}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Weight</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Year of birth</label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      min="1900"
                      max={new Date().getFullYear()}
                      value={formData?.yob}
                      onChange={handleInputChange}
                      className="input3"
                    />
                  </div>
                </div>

                {/* Right */}
                {/* 1/3 (form) 1/2 (right) */}
                <div className="relative z-0 flex flex-col w-full gap-3">
                  <div className="flex flex-col w-full">
                    <input
                      type="checkbox"
                      className="checkbox3x2 after:left-12 after:content-['Spayed/Neutered'] before:content-['\e573'] "
                      name="spayed_neatured"
                      checked={formData?.spayed_neatured}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="checkbox"
                      className="checkbox3x2 after:left-12 after:content-['Chipped'] before:content-['\f2db'] "
                      name="microchipped"
                      checked={formData?.microchipped}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="checkbox"
                      className="checkbox3x2 after:left-12 after:content-['Vaccinated'] before:content-['\f48e'] "
                      name="vaccinations"
                      checked={formData?.vaccinations}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="checkbox"
                      className="checkbox3x2 after:left-12 after:content-['House-Trained'] before:content-['\e509'] "
                      name="house_trained"
                      checked={formData?.house_trained}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* 1/3 (form) 2/2 (right) */}
                  <div className="flex flex-col gap-4">
                    <h4 className="font-normal">Friendly with...</h4>
                    <div className="flex w-full gap-3">
                      <div className="flex flex-grow">
                        <input
                          type="checkbox"
                          className=" checkbox2x2 flex-grow after:content-['Dogs'] before:content-['\f6d3'] "
                          name="dogs"
                          checked={formData?.friendly_with?.dogs}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex flex-grow">
                        <input
                          type="checkbox"
                          className="checkbox2x2 after:content-['Cats'] before:content-['\f6be'] "
                          name="cats"
                          checked={formData?.friendly_with?.cats}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex flex-grow">
                        <input
                          type="checkbox"
                          className="checkbox2x2 after:content-['Kids'] before:content-['\f1ae'] "
                          name="kids"
                          checked={formData?.friendly_with?.kids}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex flex-grow">
                        <input
                          type="checkbox"
                          className="checkbox2x2 after:content-['Adults'] before:content-['\f007'] "
                          name="adults"
                          checked={formData?.friendly_with?.adults}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2/3 (form) */}
              <div className="flex flex-col gap-3">
                <label htmlFor="">Short Description</label>
                <textarea
                  name="description"
                  cols={55}
                  rows={10}
                  draggable="false"
                  value={formData?.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {/* 3/3 (form) */}
              <div className="flex flex-col justify-end w-full gap-3 md:flex-row">
                <button className="button1x2">Remove Pet</button>
                <button className="button2">Save Changes</button>
              </div>
            </>
          )}
        </form>
      </div>
    </li>
  );
}
