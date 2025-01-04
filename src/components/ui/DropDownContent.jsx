import React from "react";
import "/public/styles.css";

function DropdownContent(props) {
  return (
    <a href="#" className="no-text-decoration">
      {props.content}
    </a>
  );
}
export default DropdownContent;
