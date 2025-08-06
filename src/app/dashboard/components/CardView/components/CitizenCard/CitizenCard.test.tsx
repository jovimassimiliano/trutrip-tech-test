import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CitizenCard from "./CitizenCard";

const MOCK_CITIZEN_DATA = {
  name: "Mary Jane",
  imageUrl: "https://placeholder.com",
  location: "Jakarta",
  gender: "Female",
  status: "Alive",
};

describe("Citizen Card", () => {
  test("should render citizen card with citizen avatar, name, gender, location, status", () => {
    render(
      <CitizenCard
        name={MOCK_CITIZEN_DATA.name}
        imageUrl={MOCK_CITIZEN_DATA.imageUrl}
        location={MOCK_CITIZEN_DATA.location}
        gender={MOCK_CITIZEN_DATA.gender}
        status={MOCK_CITIZEN_DATA.status}
      />,
    );

    const name = screen.getByTestId("citizen-name");
    const location = screen.getByTestId("location");
    const gender = screen.getByTestId("gender");
    const status = screen.getByTestId("citizen-status");

    expect(name.textContent).toEqual(MOCK_CITIZEN_DATA.name);
    expect(location.textContent).toBe(MOCK_CITIZEN_DATA.location);
    expect(gender.textContent).toBe(MOCK_CITIZEN_DATA.gender);
    expect(status.textContent).toBe(MOCK_CITIZEN_DATA.status);
  });
});
