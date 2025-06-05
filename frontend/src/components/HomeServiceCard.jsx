import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getMyHomeService, upsertMyHomeService } from "../services/http/Sitter";
import { useToast } from "../services/ContextService";

export default function HomeServiceCard({ icon, title, subtitle, reloadParent, serviceType }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [formData, setFormData] = useState({
    maxDogs: 3,
    checkinTime: "06:00:00",
    checkoutTime: "12:00:00",
    multiFamilyAllowed: true,
    pottyBreakFreq: {
      "0-2": true,
      "2-4": true,
      "4-6": false,
      "8+": false,
    },
  });
  const { showToast } = useToast();

  useEffect(() => {}, [reload]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

  async function handleExpandClick() {
    if (isActive) {
      setShowDetails(true);
      setLoading(true);
      try {
        const response = await getMyHomeService(serviceType);
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
  function handleCollapseClick() {
    setShowDetails(false);
  }

  function handleActivateClick(event) {
    setIsActive(event.target.checked);
  }

  async function handleSaveChanges(event) {
    event.preventDefault();
    try {
      await upsertMyHomeService(serviceType, formData);
      showToast(`Succesfully Added ${title} Service`, "success");
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
    } finally {
      setReload((prev) => !prev);
    }
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
        {/* Max Dogs - 1/4 Form  */}
        <div className="flex flex-col gap-3">
          <p>How many dogs do you want to host at the same time?</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <select
              id="maxDogs"
              name="maxDogs"
              className="select2 "
              onChange={handleInputChange}
              value={formData.maxDogs}
            >
              <option value="">Select Quantity</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>

        {/* Check in/out - 2/4 Form */}
        <div className="flex flex-col gap-2">
          <p>What are your check-in and check-out times?</p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <small className="font-semibold">Check-in</small>
              <select
                id="checkinTime"
                name="checkinTime"
                className="select2"
                value={formData.checkinTime}
                onChange={handleInputChange}
              >
                <option value="">I'm Flexible</option>
                <option value="08:00:00">08:00</option>
                <option value="09:00:00">09:00</option>
                <option value="10:00:00">10:00</option>
                <option value="11:00:00">11:00</option>
                <option value="12:00:00">12:00</option>
                <option value="13:00:00">13:00</option>
                <option value="14:00:00">14:00</option>
                <option value="15:00:00">15:00</option>
                <option value="16:00:00">16:00</option>
                <option value="17:00:00">17:00</option>
                <option value="18:00:00">18:00</option>
                <option value="19:00:00">19:00</option>
                <option value="20:00:00">20:00</option>
                <option value="21:00:00">21:00</option>
                <option value="22:00:00">22:00</option>
                <option value="23:00:00">23:00</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <small className="font-semibold">Check-out</small>
              <select
                id="checkoutTime"
                name="checkoutTime"
                className="select2"
                value={formData.checkoutTime}
                onChange={handleInputChange}
              >
                <option value="">I'm Flexible</option>
                <option value="08:00:00">08:00</option>
                <option value="09:00:00">09:00</option>
                <option value="10:00:00">10:00</option>
                <option value="11:00:00">11:00</option>
                <option value="12:00:00">12:00</option>
                <option value="13:00:00">13:00</option>
                <option value="14:00:00">14:00</option>
                <option value="15:00:00">15:00</option>
                <option value="16:00:00">16:00</option>
                <option value="17:00:00">17:00</option>
                <option value="18:00:00">18:00</option>
                <option value="19:00:00">19:00</option>
                <option value="20:00:00">20:00</option>
                <option value="21:00:00">21:00</option>
                <option value="22:00:00">22:00</option>
                <option value="23:00:00">23:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* Multi Family ALlowed - 3/4 Form */}
        <div className="flex flex-col gap-5">
          <p>Do you plan to host dogs from different families at the same time</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <select
              id="multiFamilyAllowed"
              name="multiFamilyAllowed"
              className="select2"
              onChange={handleInputChange}
              value={formData.multiFamilyAllowed}
            >
              <option value="">Select Plan</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>

        {/* Potty Break Frequency - 4/4 Form */}
        <div className="flex flex-col gap-5">
          <p>When hosting dogs in your home, how frequently can you provide potty breaks?</p>
          <p className="font-semibold">Every:</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <select
              id="pottyBreakFreq"
              name="pottyBreakFreq"
              className="select2"
              multiple={true}
              onChange={handleInputChange}
              value={Object.entries(formData.pottyBreakFreq) // → [["0-2", true], ["2-4", false], ["4-6", true], ["8+", false]]
                .filter(([_, selected]) => selected) // → [["0-2", true], ["4-6", true]]
                .map(([key]) => key)} // → ["0-2", "4-6"]
            >
              <option value="0-2">0-2 Hours</option>
              <option value="2-4">2-4 Hours</option>
              <option value="4-6">4-6 Hours</option>
              <option value="8+">8+ Hours</option>
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
