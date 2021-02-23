import { Factory } from "rosie";
import faker from "faker/locale/ko";

import { createRadomSizeArray, getFormatDate } from "../utils";

export const postEdgeNodeFactory = Factory.define("node")
  .option("date", () => faker.datatype.datetime())
  .option("title", () => faker.name.title())
  .attrs({
    excerpt: () => faker.lorem.paragraph(),
    timeToRead: () => faker.datatype.number({ max: 99 }),
  })
  .attr("fields", ["date", "title"], (date, title) => ({
    date,
    slug: title.split(" ").join("-"),
  }))
  .attr("frontmatter", ["date", "title"], (date, title) => ({
    cover: faker.image.imageUrl(),
    date: getFormatDate(date),
    description: faker.random.arrayElement([faker.lorem.paragraph(), null]),
    tags: faker.random.arrayElements(createRadomSizeArray(faker.lorem.word, { max: 10 })),
    title,
  }));

export const postEdgeFactory = Factory.define("postEdge").attr("node", () =>
  postEdgeNodeFactory.build(),
);
