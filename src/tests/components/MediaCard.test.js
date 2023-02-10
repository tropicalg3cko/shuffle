import { render, screen } from "@testing-library/react";
import { getImage } from "../../utils/MediaCard";

describe("getImage function", () => {
  const suit = "Diamond";
  it("returns the correct url", () => {
    expect(getImage(suit)).toEqual("diamond.png");
  });
});
