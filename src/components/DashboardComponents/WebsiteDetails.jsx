import React from "react";
import editSite from "../../assets/editSite.svg";
import publishSite from "../../assets/publishSite.svg";
import siteDeployed from "../../assets/siteDeployed.svg";

export default function WebsiteDetails({ name, url }) {
const siteDeployedStatus = (url !== null);
  return (
    <div class="w-full flex">
      <div class="w-11/12 rounded-l-[40px] border border-gray-400 px-8 py-2">
        <div className="w-full">
          <h1 class="text-3xl font-medium font-montserrat text-[var(--text-color)]">{name}</h1>
          <h3 class="text-xs text-gray-400 font-medium">{url ? url : "Not deployed yet"}</h3>
        </div>
      </div>
      <div class="w-1/12 border border-gray-400 flex justify-center items-center">
        <a href="!!!!">
          <img src={editSite} alt="img" />
        </a>
      </div>
      <div class="w-1/12 border border-gray-400 rounded-r-[40px] flex justify-center items-center">
        <a href="$$$$">
          <img src={url ? siteDeployed : publishSite} alt="img" />
        </a>
      </div>
    </div>
  );
}
