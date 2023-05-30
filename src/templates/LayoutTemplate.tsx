import React, { ReactNode } from "react";
// import { Global, ThemeProvider, css } from "@emotion/react";

// import { Header, Footer } from "../components";
// import { resetStyle, theme } from "../styles";

// const useStyles = () => ({
//   root: ({ colors: { grey } }) => css`
//     display: flex;
//     flex-direction: column;
//     background: ${grey[100]};
//     min-height: 100vh;
//   `,
//   content: css`
//     margin: 0 auto;
//     width: 110rem;
//   `,
// });

type LayoutTemplateProps = {
  children?: ReactNode | undefined;
};

const LayoutTemplate = ({ children }: LayoutTemplateProps) => (
  // const styles = useStyles();

  <div>{children}</div>
  // <ThemeProvider theme={theme}>
  //   <Global styles={resetStyle} />
  //   <div css={styles.root}>
  //     <Header />
  //     <div css={styles.content}>{children}</div>
  //     <Footer />
  //   </div>
  // </ThemeProvider>
);
export default LayoutTemplate;
