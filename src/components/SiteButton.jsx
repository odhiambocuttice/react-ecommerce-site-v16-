import React from "react";
import { Link } from "react-router-dom";

const SiteButton = ({ className, children, onClick, to }) => {
  return (
    <button className={className} onClick={onClick}>
      {to ? <Link to={to}>{children}</Link> : children}
    </button>
  );
};

export default SiteButton;
