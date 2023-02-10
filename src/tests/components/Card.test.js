import { render, screen } from "@testing-library/react";
import Card from "../../components/MainSection";
import { getRandomInt, createDeck } from "../../utils/Card";

describe("Card component ", () => {
  it("renders", () => {
    render(<Card />);
  });
});

describe("Button component ", () => {
  it("renders correctly", () => {
    render(<Card />);
    expect(screen.getByText("Overhand Shuffle")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("Random Int function", () => {
  it("returns random number between 1 and 7", () => {
    expect(getRandomInt()).toBeLessThan(7);
    expect(getRandomInt()).toBeGreaterThan(1);
  });
});

describe("Create Deck", () => {
  it("returns 52 cards", () => {
    expect(createDeck()).toHaveLength(52);
  });

  const start = { number: "Ace", suit: "Club" };
  const middle = { number: "King", suit: "Diamond" };
  const end = { number: "King", suit: "Heart" };

  it("to be intitally ordered", () => {
    expect(createDeck()[0]).toEqual(start);
    expect(createDeck()[25]).toEqual(middle);
    expect(createDeck()[51]).toEqual(end);
  });
});
