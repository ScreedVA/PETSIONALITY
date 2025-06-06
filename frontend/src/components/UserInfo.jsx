import React, { useEffect, useState } from "react";
import { imgs } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { getMe, updateMe } from "../services/http/User";
import { useToast } from "../services/ContextService";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../services/Common";

export default function UserInfo() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true); // 🟡 loading state
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLoadData() {
      try {
        const response = await getMe();
        setFormData(response);
      } catch (err) {
        console.error(`Error Message: ${err.message}`);
      } finally {
        setTimeout(() => {
          setLoading(false); // ✅ stop loading once done (even if failed)
        }, 500);
      }
    }
    handleLoadData();

    checkAuth(navigate, showToast);
  }, []);

  async function handleSaveChangesClick() {
    setLoading(true);
    try {
      const response = await updateMe(formData);
      console.log(response);
      console.log("formData", formData);
    } catch (err) {
      console.error("Error Message", err.message, "Status:", err.status);
    } finally {
      setTimeout(() => {
        setLoading(false); // ✅ stop loading once done (even if failed)
        showToast("Update Successful", "success");
      }, 500);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target || {};
    setFormData((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full h-full gap-5">
      {/* Header */}
      <div className="flex items-center gap-10">
        <div className="relative w-32 h-32">
          <img src={imgs[1]} alt="Profile Photo" className="object-cover w-32 h-32 rounded-full" />
          <button
            className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-8 text-white bg-orange-400 rounded-full shadow-md hover:bg-orange-500"
            title="Edit"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
        <div>
          <h3>{formData.username || "Name not available"}</h3>
          <h5 className="text-gray-500">
            {formData.city ? `${formData.city}, ${formData.country}` : "Location unknown"}
          </h5>
        </div>
      </div>

      {/* Form Body */}
      <form className="flex flex-col gap-5">
        <div className="flex flex-col grid-cols-2 gap-5 md:grid">
          {[
            { label: "Username", name: "username" },
            { label: "Email", name: "email" },
            { label: "Phone number", name: "phoneNo" },
            { label: "Country", name: "country" },
            { label: "City", name: "city" },
            { label: "Postal code", name: "postalCode" },
          ].map(({ label, name }) => (
            <div key={name} className="flex flex-col">
              <label>{label}</label>
              <input
                type="text"
                className="input2"
                name={name}
                value={formData[name] || ""}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
          <button className="w-full md:w-64 button2" onClick={handleSaveChangesClick}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
