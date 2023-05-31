import React from "react";
import { Link } from "gatsby";

import { PageContext } from "./types";
import { Root, Body, List as StyledList } from "./styles";
import { PostFromJson, PostFromJsonList } from "../../types";
import { Header, Card } from "../../components/common";
import { generateFormattedTime } from "../../utils/date";

type ItemProps = {
  post: PostFromJson;
};

const Item = ({ post }: ItemProps) => {
  const { route, title, description, coverImageAlt, coverImageUrl, datePublished } = post;
  const formattedPublishedDate = generateFormattedTime(datePublished);

  return (
    <li>
      <Link to={route}>
        <Card
          title={title}
          description={description}
          meta={[formattedPublishedDate]}
          coverImageAlt={coverImageAlt}
          coverImageUrl={coverImageUrl}
        />
      </Link>
    </li>
  );
};

type ListProps = {
  posts: PostFromJsonList;
};

const List = ({ posts }: ListProps) => (
  <StyledList>
    {posts.map(post => (
      <Item key={post.slug} post={post} />
    ))}
  </StyledList>
);

export type FeedTemplateProps = {
  pageContext: PageContext;
};

export type FeedTemplateContext = PageContext;

const FeedTemplate = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { posts } = pageContext.feedPageMeta;

  return (
    <Root>
      <Header />
      <Body>
        <List posts={posts} />
      </Body>
    </Root>
  );
};

export default FeedTemplate;
