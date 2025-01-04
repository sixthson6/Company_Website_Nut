import React from "react";
import "/public/styles.css";
import DropdownContent from "./DropDownContent";

function DropDown(props) {
  return (
    <div className="header-dropdown-content" style={{ display: props.display }}>
      <DropdownContent content="Profile" />
      <DropdownContent content="Goals" />
      <DropdownContent content="Settings" />
      <DropdownContent content="Logout" />
    </div>
  );
}
export default DropDown;
