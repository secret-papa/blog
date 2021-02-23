import faker from "faker";

const createRandomSizeArray = (item, limit = { min: 0, max: 100 }) => {
  const array = [];
  const length = faker.datatype.number(limit);

  for (let i = 0; i < length; i += 1) {
    if (typeof item === "function") {
      array.push(item());
    } else {
      array.push(item);
    }
  }

  return array;
};

export default createRandomSizeArray;
