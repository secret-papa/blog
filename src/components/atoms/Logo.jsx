import React from "react";

import Text from "./Text";
import Link from "./Link";

const Logo = () => {
  return (
    <Link to="/">
      <Text bold component="h1" variant="title1">
        :D
      </Text>
    </Link>
  );
};

export default Logo;
