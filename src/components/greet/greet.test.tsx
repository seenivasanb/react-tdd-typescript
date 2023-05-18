import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet render correctly", () => {
  render(<Greet name="Seeni" />);
  const textElement = screen.getByText(/greet/i);
  expect(textElement).toBeInTheDocument();
});
