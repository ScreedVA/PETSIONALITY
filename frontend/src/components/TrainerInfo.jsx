import React, { useEffect, useState } from "react";
import { serviceOptions, trainingSpecialities } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faFile } from "@fortawesome/free-solid-svg-icons";
import { getMyTrainerInfo, upsertMyTrainerInfo } from "../services/http/Trainer";
import Loading from "./Loading";
import { useToast } from "../services/ContextService";

export default function TrainerInfo() {
  const [formData, setFormData] = useState({
    frontendSetup: {
      trainingSpecialities: trainingSpecialities,
      serviceOptions: serviceOptions,
    },
  });
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    async function handleLoadData() {
      try {
        const response = await getMyTrainerInfo();

        setFormData((prevFields) => ({
          ...prevFields, // Keep Frontend Form Setup
          ...response,
        }));
      } catch (err) {
        console.error("Error Message", err.message, "Status:", err.status);
        showToast(`${err.message}`, "error", 6000);
      } finally {
        setLoading(false);
      }
    }
    handleLoadData();
  }, []);

  async function handleSaveChanges(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const { frontendSetup, ...rest } = formData;
      await upsertMyTrainerInfo(rest);
      showToast(`Trainer Info Updated Succesfully`, "success", 6000);
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
      showToast(`${err.message}`, "error", 6000);
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(event, category, key) {
    const { checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: checked,
      },
    }));
  }

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        {/* Training Specialities */}

        {/* Training Specialities (Head) */}
        <div className="flex justify-center py-3 text-[#49978B]">
          <h5>Training Specialities</h5>
        </div>

        {/* Training Specialities(Body/Grid) */}
        <div className="grid p-5 lg:grid-cols-2 md:grid-cols-1">
          {formData.frontendSetup.trainingSpecialities.map((speciality) => (
            <div key={speciality.label} className="flex items-center justify-start flex-grow gap-4 px-4 h-14">
              <input
                type="checkbox"
                className="checkbox1"
                checked={formData.trainingSpecialities?.[speciality.name] || false}
                onChange={(e) => handleInputChange(e, "trainingSpecialities", speciality.name)}
              />
              <small className="text-s">{speciality.label}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Service Options */}
        <div className="flex justify-center py-3  text-[#49978B]">
          {/* Service Options (Head) */}
          <h5>Service Options</h5>
        </div>

        {/* Service Options (Body/Grid) */}
        <div className="grid p-5 lg:grid-cols-2 md:grid-cols-1">
          {formData.frontendSetup.serviceOptions.map((option) => (
            <div key={option.label} className="flex items-center justify-start flex-grow gap-4 px-4 h-14">
              <input
                type="checkbox"
                className="checkbox1"
                checked={formData.serviceOptions?.[option.name] || false}
                onChange={(e) => handleInputChange(e, "serviceOptions", option.name)}
              />
              <small className="text-s">{option.label}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Upload Photos */}
        <div className="flex justify-center py-3 text-[#49978B]">
          {/* Upload Photos (Head) */}
          <h5>Upload Photos</h5>
        </div>

        {/* Upload Photos (Body/Grid) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faImage} fontSize={30} />
            <small className="text-center">Upload a Photo Here</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faImage} fontSize={30} />
            <small className="text-center">Upload a Photo Here</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faImage} fontSize={30} />
            <small className="text-center">Upload a Photo Here</small>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Upload Videos */}
        <div className="flex justify-center py-3 text-[#49978B]">
          {/* Upload Videos (Head) */}
          <h5>Upload Videos</h5>
        </div>

        {/* Upload Photos (Body/Grid) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faVideo} fontSize={30} />
            <small className="text-center">Upload a Video Here</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faVideo} fontSize={30} />
            <small className="text-center">Upload a Video Here</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faVideo} fontSize={30} />
            <small className="text-center">Upload a Video Here</small>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Upload Documents */}
        <div className="flex justify-center py-3 text-[#49978B]">
          {/* Upload Documents (Head) */}
          <h5>Upload Documents</h5>
        </div>

        {/* Upload Documents (Body/Grid) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faFile} fontSize={30} />
            <small className="text-center">Upload a Certification Here</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white text-[#49978B] border border-[#49978B]">
            <FontAwesomeIcon icon={faFile} fontSize={30} />
            <small className="text-center">Upload a Certification Here</small>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <button className="button2" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
