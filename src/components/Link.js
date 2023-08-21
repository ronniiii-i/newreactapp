import React from "react";

function Link({ details }) {
  return (
    <div>
      <a href={details.url} target="_blank" rel="noopener noreferrer">
        {details.name}
      </a>
    </div>
  );
}

export default Link;
