import React from "react";
import { render } from "@testing-library/react";

import Image from "../Image";

describe("<Image />", () => {
  let alt;
  let src;

  beforeEach(() => {
    alt = "test";
    src = "https://xxxx.xxx";
  });

  it("shold render image", () => {
    const { getByAltText } = render(<Image src={src} alt={alt} />);
    const image = getByAltText(alt);
    expect(image).toHaveAttribute("src", src);
  });
});
