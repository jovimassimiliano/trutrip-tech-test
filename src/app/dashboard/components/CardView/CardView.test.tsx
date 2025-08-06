import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CardView from "./CardView";

const MOCKS = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
    episode: [],
  },
];

describe("Card view", () => {
  test("it should render loading state", () => {
    render(<CardView citizens={MOCKS} isLoading />);

    const cardLoadingElement = screen.getAllByTestId(/card-skeleton/);
    expect(cardLoadingElement.length).toBe(12);
  });

  test("it should render Card View list with citizen data", () => {
    render(<CardView citizens={MOCKS} isLoading={false} />);
    const cardElement = screen.getAllByTestId(/citizen-card/);

    expect(cardElement.length).toBe(1);
  });
});
