import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Modal from "./Modal";

function Portals() {
  return (
    <Fragment>
      <div>Portals</div>
      {ReactDom.createPortal(<Modal/>, document.getElementById('upper-root'))}
    </Fragment>
  );
}

export default Portals;
