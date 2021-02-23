import React from "react";
import { Link as GatsbyLink } from "gatsby";

import "./Link.css";

const Link = ({ children, to }) => {
  return (
    <GatsbyLink className="link" to={to}>
      {children}
    </GatsbyLink>
  )
}

export default Link;