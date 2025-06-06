import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight, faChevronDown, faSun, faDog, faWalking } from "@fortawesome/free-solid-svg-icons";
import { servicePage } from "./Data";
import HomeServiceCard from "./HomeServiceCard";
import { checkAuth } from "../services/Common";
import { useNavigate } from "react-router-dom";
import { useToast } from "../services/ContextService";
import VisitsServiceCard from "./VisitsServiceCard";

export default function Services() {
  const [pageState, setPageState] = useState(servicePage);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  function reloadPage() {
    setReload((prev) => !prev);
  }

  useEffect(() => {
    checkAuth(navigate, showToast);
  }, [reload]);

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
      <VisitsServiceCard
        icon={faDog}
        title={"Drop-in Visits"}
        subtitle={
          "You visit a client’s home briefly (usually 30 mins) to feed, play with, and check on their pet—without staying overnight."
        }
        serviceType={"drop_in_visits"}
      />

      {/* Dog Walking */}
      <VisitsServiceCard
        icon={faWalking}
        title={"Dog Walking"}
        subtitle={"You walk a client’s dog for a set amount of time (20–60 mins), typically around the neighborhood."}
        serviceType={"dog_walking"}
      />
    </div>
  );
}
