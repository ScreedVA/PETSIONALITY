import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getMyVisitService, upsertMyVisitService } from "../services/http/Sitter";
import { useToast } from "../services/ContextService";

export default function VisitsServiceCard({ icon, title, subtitle, reloadParent, serviceType }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [formData, setFormData] = useState({});
  const { showToast } = useToast();

  useEffect(() => {
    if (!isActive) setShowDetails(false);
  }, [reload]);

  async function handleExpandClick() {
    if (isActive) {
      setShowDetails(true);
      setLoading(true);
      try {
        const response = await getMyVisitService(serviceType);
        setFormData(response);
        setIsNew(false);
      } catch (err) {
        if (err.status === 404) {
          setIsNew(true);
        }
        console.error("Error Message", err.message, "Status:", err.status);
      } finally {
        setLoading(false);
      }
    }
  }

  async function handleActivateClick(event) {
    const isChecked = event.target.checked;
    setIsActive(isChecked);
    event.preventDefault();
    try {
      await upsertMyVisitService(serviceType, { isActive: isChecked });

      console.log(isChecked);
      console.log(isActive);
      isChecked === true
        ? showToast(`Added ${title} Service`, "success")
        : showToast(`Removed ${title} Service`, "error");
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
    } finally {
      setReload((prev) => !prev);
    }
  }

  async function handleSaveChanges(event) {
    event.preventDefault();
    try {
      await upsertMyVisitService(serviceType, formData);
      showToast(`Succesfully Added ${title} Service`, "success");
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
    } finally {
      setReload((prev) => !prev);
    }
  }

  function handleInputChange(event) {
    const { name, multiple, options, value } = event.target;

    let parsedValue;

    if (multiple) {
      // ✅ If select allows multiple values, return an object with selected options as keys set to true
      parsedValue = Array.from(options).reduce((acc, opt) => {
        acc[opt.value] = opt.selected;
        return acc;
      }, {});
    } else if (!isNaN(value) && value !== "") {
      // ✅ If value is numeric, convert to Number
      parsedValue = Number(value);
    } else {
      // ✅ Default to string
      parsedValue = value;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));

    console.log(`name: ${name}, value: ${typeof parsedValue}`);
  }

  function handleCollapseClick() {
    setShowDetails(false);
  }

  return (
    <div
      className={`flex flex-col bg-white  p-5 pb-0 gap-5 border-[#288677] rounded-xl ${
        isActive ? "text-[#288677] border " : "text-[#D9D9D9]"
      }`}
    >
      {/* Dog Boarding (Head) */}
      <div className="flex items-center justify-between">
        {/* Dog Boarding (Head/Flex-Left) */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <p className="font-semibold">{title}</p>
        </div>
        {/* Activate Button (Head/Flex-Right) */}
        <div>
          <input type="checkbox" className="checkbox5" checked={isActive} onChange={handleActivateClick} />
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
          showDetails ? "max-h-[800px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        {/* Max Distance Km - 1/3 Form  */}

        <div className="flex flex-col gap-3">
          <p>What is the maximum distance you will travel to get to a client's home?</p>
          <div className="flex items-center grid-cols-2 gap-2 md:grid">
            <select
              id="maxDistanceKm"
              name="maxDistanceKm"
              className="select2 "
              onChange={handleInputChange}
              value={formData.maxDistanceKm}
            >
              <option value="">Select Quantity</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
            <p>km</p>
          </div>
        </div>

        {/* Max visits per day - 2/3 Form*/}
        <div className="flex flex-col gap-3">
          <p>How many drop-in visits can you do per day?</p>
          <div className="flex items-center grid-cols-2 gap-2 md:grid">
            <select
              id="maxVisitsPerDay"
              name="maxVisitsPerDay"
              className="select2 "
              onChange={handleInputChange}
              value={formData.maxVisitsPerDay}
            >
              <option value="">Select Visits</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p>Visits</p>
          </div>
        </div>

        {/* Available times - 3/3 Form */}
        <div className="flex flex-col gap-5">
          <p>
            What times are you availiable for Drop In Visits{" "}
            <small className="font-semibold">(check all that apply)?</small>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <select
              id="availableTimes"
              name="availableTimes"
              className="select2"
              multiple={true}
              onChange={handleInputChange}
              value={
                formData.availableTimes
                  ? Object.entries(formData.availableTimes) // → [["6:00-11:00", true], ["11:00-15:00", false], ["15:00-22:00", true]]
                      .filter(([_, selected]) => selected) // → [["6:00-11:00", true], ["15:00-22:00", true]]
                      .map(([key]) => key)
                  : []
              } // → ["6:00-11:00", "15:00-22:00"]
            >
              <option value="6:00-11:00">6:00-11:00</option>
              <option value="11:00-15:00">11:00-15:00</option>
              <option value="15:00-22:00">15:00-22:00</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-end w-full gap-3 md:flex-row">
          <button className="button2" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
