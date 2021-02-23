import React from "react";
import { css } from "@emotion/react";

import { Logo } from "../atoms";

const makeStyles = () => ({
  header: css`
    align-items: center;
    display: flex;
    justify-content: left;
    height: 7.2rem;
  `,
  content: css`
    margin: 0 auto;
    width: 110rem;
  `,
  header__logo: css``,
});

const Header = () => {
  const styles = makeStyles();

  return (
    <header css={styles.header}>
      <div css={styles.content}>
        <div css={styles.header__logo}>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
