import React from "react";

import { Body, CoverImage, CoverImageWrap, Description, Header, Meta, Root, Title } from "./styles";

type CardProps = {
  title: string;
  description?: string;
  meta?: string[];
  coverImageUrl?: string;
  coverImageAlt?: string;
};

const Card = ({ title, description, meta, coverImageUrl, coverImageAlt }: CardProps) => (
  <Root>
    <Header>
      <CoverImageWrap>
        <CoverImage src={coverImageUrl} alt={coverImageAlt} />
      </CoverImageWrap>
    </Header>
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {meta && <Meta>{meta.join(" · ")}</Meta>}
    </Body>
  </Root>
);

export default Card;
