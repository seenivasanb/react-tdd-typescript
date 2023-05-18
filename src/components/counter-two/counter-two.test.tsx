import { render, screen } from "@testing-library/react";
import CounterTwo from "./counter-two";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  test("should render correctly", () => {
    render(<CounterTwo count={0} />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Counter Two");
  });

  test("should call handler functions", async () => {
    userEvent.setup();

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={mockIncrement}
        handleIncrement={mockDecrement}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(mockIncrement).toHaveBeenCalledTimes(1);
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });
});
