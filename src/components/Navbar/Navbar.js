import React, { useState } from "react";
import NavForViewer from "./NavForViewer";
import SideDrawer from "./SideDrawer";
import "../../styles/NavForViewer.scss";
import BackDrop from "./BackDrop";

function Navbar() {
  const [state, setstate] = useState(false);

  const drawerToggleClickHnadler = () => {
    setstate(!state);
  };

  const backDropHandler = () => {
    setstate(false);
  };

  return (
    <div>
      <NavForViewer drawerToggleClickHnadler={drawerToggleClickHnadler} />
      <SideDrawer show={state} clear={drawerToggleClickHnadler} />
      <BackDrop click={backDropHandler} drawer={state} />
    </div>
  );
}

export default Navbar;
