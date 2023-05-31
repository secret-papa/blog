import React from "react";
import { Link } from "gatsby";

import { Header as StyledHeader, Wrapper } from "./styles";
import Logo from "../Logo";

const Header = () => (
  <Wrapper>
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
    </StyledHeader>
  </Wrapper>
);

export default Header;
