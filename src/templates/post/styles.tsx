import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Root = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-grey-900);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.5rem;
`;

export const Article = styled.article`
  width: 768px;
`;

export const CoverImageWrapper = styled.div`
  margin-top: 2rem;
`;

export const CoverImage = styled.img`
  display: block;
  width: 100%;
`;

export const MarkdownWrapper = styled.div`
  margin: 5rem 0 6rem;
`;

export const MarkdownBody = styled.div`
  & ol,
  ul {
    list-style: decimal;
  }
`;

export const NavigationButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

const leftDirectionCss = css`
  text-align: left;
`;
const rightDirectionCss = css`
  text-align: right;
`;

type Align = "left" | "right";

export const NavigationButton = styled(Link)<{ align?: Align }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  background-color: #f8f9fa;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  border: none;
  cursor: pointer;
  ${props => (props.align === "right" ? rightDirectionCss : leftDirectionCss)}
`;

export const NavigationButtonCaption = styled.span`
  font-size: 0.75rem;
  color: var(--color-grey-600);
`;

export const NavigationButtonTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--color-grey-700);
`;
