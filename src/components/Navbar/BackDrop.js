import React from "react";

const BackDrop = (props) => {
  let designClass;
  if (props.drawer) designClass = "backdrop";

  return <div className={designClass} onClick={props.click}></div>;
};

export default BackDrop;
