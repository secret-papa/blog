import styled from "styled-components";

export const Root = styled.div`
  width: 320px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-radius: 4px;
`;

export const Header = styled.div``;

export const CoverImageWrap = styled.div`
  height: 168px;
`;

export const CoverImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--color-grey-700);
`;

export const Description = styled.p`
  display: -webkit-box;
  height: 3.9375rem;
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-grey-600);
  margin-bottom: 1.5rem;
`;

export const Meta = styled.div`
  font-size: 0.75rem;
  color: var(--color-grey-500);
`;
