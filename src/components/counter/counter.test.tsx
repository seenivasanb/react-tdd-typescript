import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Counter", () => {
  test("should render correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("should render 0 count", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Counter: 0");
  });

  test("should render the counter 1 after clicking the button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await act(async () => await user.click(incrementButton));

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Counter: 1");
  });

  test("should focus on order", async () => {
    user.setup();
    render(<Counter />);

    const numberElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(numberElement).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
