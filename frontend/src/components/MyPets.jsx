import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPencil } from "@fortawesome/free-solid-svg-icons";
import { imgs } from "./Data";
import { petList as pets } from "./Data";
import PetCard from "./PetCard";
import Loading from "./Loading";
import { getMyPets } from "../services/http/Pet";
import { useNavbar, useToast } from "../services/ContextService";
import { checkAuth } from "../services/Common";
import { useNavigate } from "react-router-dom";

export default function MyPets() {
  const [pageState, setPageState] = useState("Pet List");
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true); // 🟡 loading state
  const [reload, setReload] = useState(false);
  const { setNavbarType } = useNavbar();
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLoadData() {
      try {
        const response = await getMyPets({ detailLevel: "summary" });
        console.log("response", response);
        console.log("petList ", petList);

        // Add showDetails to each pet
        const petsWithDetailsFlag = response.map((pet, index) => ({
          ...pet,
          showDetails: false, // default value
          img: pets[index]?.img || null, // Temp images from Data.js
        }));

        setPageState("Pet List");
        setPetList(petsWithDetailsFlag);

        console.log("petList ", petList);
      } catch (err) {
        if (err.status === 404) {
          setPageState("Add Pet");
        } else {
          const errorType = err?.constructor?.name || "UnknownError";
          // showToast(`${err.message}`, "error");
          console.error("Error Message:", err.message, "Error Type:", errorType);
        }
      } finally {
        setLoading(false);
      }
    }
    handleLoadData();

    checkAuth(navigate, showToast);
  }, [reload]);

  function handleAddPetClick(event) {
    event.preventDefault();

    setPetList((prevFields) => [
      ...prevFields,
      {
        showDetails: true,
        new: true,
      },
    ]);
    setPageState("Pet List");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    // Renders 'Add Pet' or 'Pet List'
    <>
      {pageState === "Add Pet" && (
        <>
          {/* State 0 - Add Pet*/}
          <div className="w-full h-full">
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-[450px] h-[450px] bg-mint-gradient-light flex flex-col justify-center gap-5 px-20">
                <FontAwesomeIcon icon={faPaw} size={"10x"} color="#49978B" />
                <p className="text-center">Share their name, photo, and a little about what makes them special.</p>
                <button className="button1" onClick={handleAddPetClick}>
                  Add Pet Profile
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {pageState === "Pet List" && petList.length && (
        <div className="flex flex-col items-end gap-6">
          {/* State 1 - Pet List */}
          <ul className="flex flex-col w-full gap-4 ">
            {/* Pet Card */}
            {petList.map((pet, index) => (
              <PetCard
                key={`${pet.breed}-${index}`}
                pet={pet}
                setPetList={setPetList}
                petList={petList}
                reloadParent={() => {
                  setReload((prev) => !prev);
                }}
                index={index}
                setPageState={setPageState}
              />
            ))}
          </ul>
          <button className="w-full text-2xl md:w-1/2 button1" onClick={handleAddPetClick}>
            Add Pet
          </button>
        </div>
      )}
    </>
  );
}
