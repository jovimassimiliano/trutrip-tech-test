import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import LoginForm from "./LoginForm";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Login form", () => {
  afterEach(() => {
    mockPush.mockClear();
  });

  test("show error if email & password field is empty", async () => {
    render(<LoginForm />);

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    const errorEmailField = screen.getByText(/Invalid email/i);
    const errorPasswordField = screen.getByText(/Invalid password/i);

    expect(errorEmailField).toBeInTheDocument();
    expect(errorPasswordField).toBeInTheDocument();
  });

  test("user should be redirect to dashboard after logged in", async () => {
    render(<LoginForm />);

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailField, "test@email.com");
    await userEvent.type(passwordField, "password");
    await userEvent.click(submitButton);

    // assert redirect is called
    expect(mockPush).toHaveBeenCalled();
  });
});
