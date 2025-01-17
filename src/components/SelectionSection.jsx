import React, { useState } from "react";
import Dropdown from "./DropDown";
import { BsList } from "react-icons/bs";
import { LuTable } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";

const Selection = ({ selectedView, onViewChange }) => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [dropdownSelection, setDropdownSelection] = useState("All Projects");

  const handleViewChange = (view) => {
    onViewChange(view); // Notify parent about the view change
  };

  return (
    <div className="selection-div">
      <div>
        <Dropdown
          label={dropdownSelection}
          options={options}
          onChange={(selectedOption) => setDropdownSelection(selectedOption)}
        />
      </div>
      <div className="right-section">
        <span
          className={selectedView === "list" ? "selected" : ""}
          onClick={() => handleViewChange("list")}
        >
          <BsList />
        </span>
        <span
          className={selectedView === "table" ? "selected" : ""}
          onClick={() => handleViewChange("table")}
        >
          <LuTable />
        </span>
        <div></div>
        <HiDotsVertical />
      </div>
    </div>
  );
};

export default Selection;
