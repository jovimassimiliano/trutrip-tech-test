import { renderComponent } from "@/utils/testUtils";
import { describe, expect, test, vi } from "vitest";
import DashboardPage from "./page";
import { screen } from "@testing-library/react";

import { TOKEN_KEY } from "@/constants/auth";
import { beforeEach } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Dashboard page", () => {
  beforeEach(() => {
    vi.spyOn(localStorage, "setItem");
    localStorage.setItem(TOKEN_KEY, "token");
  });

  test("render citizen in card mode", async () => {
    renderComponent(<DashboardPage />);

    const citizenCards = await screen.findAllByTestId(/citizen-card+/i);

    expect(citizenCards.length).toBe(20);
  });

  test("render citizen in table view mode", async () => {
    localStorage.setItem(TOKEN_KEY, "token");
    renderComponent(<DashboardPage />);

    const citizenCards = await screen.findAllByTestId(/citizen-card+/i);

    expect(citizenCards.length).toBe(20);
  });
});
