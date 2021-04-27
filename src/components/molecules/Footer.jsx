import React from "react";
import { css } from "@emotion/react";

import { Text } from "@components/atoms";

const useStyles = () => ({
  root: ({ spacing }) => css`
    display: flex;
    flex-direction: column;
    margin: ${spacing(5)}rem auto ${spacing(1.5)}rem;
    width: 110rem;
  `,
});

const Footer = () => {
  const styles = useStyles();

  return (
    <footer css={styles.root}>
      <Text variant="body3" color="lightGray2">
        © 2021 secret-papa
      </Text>
      <Text variant="body3" color="lightGray2">
        행복한 하루 보내세요.🍀
      </Text>
    </footer>
  );
};

export default Footer;
