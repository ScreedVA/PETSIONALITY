import React from "react";
import { serviceOptions, trainingSpecialities } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faFile } from "@fortawesome/free-solid-svg-icons";

export default function TrainerInfo() {
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
          {trainingSpecialities.map((speciality) => (
            <div className="flex items-center justify-start flex-grow gap-4 px-4 h-14">
              <input type="checkbox" className="checkbox1" />
              <small className="text-s">{speciality}</small>
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
          {serviceOptions.map((speciality) => (
            <div className="flex items-center justify-start flex-grow gap-4 px-4 h-14">
              <input type="checkbox" className="checkbox1" />
              <small className="text-s">{speciality}</small>
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
        <div className="grid grid-cols-3 gap-3">
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
        <div className="grid grid-cols-3 gap-3">
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
        <div className="grid grid-cols-2 gap-3">
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
      <div className="flex justify-end">
        <button className="button2">Save Changes</button>
      </div>
    </div>
  );
}
