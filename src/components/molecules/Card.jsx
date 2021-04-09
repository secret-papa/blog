import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

import { Text, Link, Image } from "../atoms";

const makeStyles = () => ({
  root: css`
    width: 26rem;
    height: 30rem;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.05);
  `,
  anchor: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  cover: css`
    width: 100%;
    height: 14rem;
    background: #e6e6e6;
  `,
  description: ({ spacing }) => css`
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    overflow: hidden;
    max-height: 5.7rem;
    margin-bottom: ${spacing(1.75)}rem;
    overflow: hidden;
    vertical-align: top;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  `,
  body: ({ spacing }) => css`
    padding: ${spacing(2.5)}rem ${spacing(2)}rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  title: ({ spacing }) => css`
    margin-bottom: ${spacing(1.75)}rem;
  `,
});

const Card = ({ cover, date, description, path, title, timeToRead }) => {
  const styles = makeStyles();

  return (
    <div css={styles.root}>
      <Link css={styles.anchor} to={path}>
        <figure css={styles.cover}>
          <Image src={cover} />
        </figure>
        <div css={styles.body}>
          <Text bold color="darkGray" component="p" customStyle={styles.title} variant="body1">
            {title}
          </Text>
          <div css={styles.description}>
            <Text variant="body2">{description}</Text>
          </div>
          <div>
            <Text color="lightGray2" variant="body2">
              {date} · ☕️ ️{timeToRead} min read
            </Text>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.defaultProps = {
  description: "",
};

Card.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default Card;
