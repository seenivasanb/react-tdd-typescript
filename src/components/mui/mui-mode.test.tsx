import { render, screen } from "../../test-utils";
import MuiMode from "./mui-mode";

describe("Mui Mode", () => {
  test("should render dark mode", () => {
    render(<MuiMode />, {});

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("DARK MODE");
  });
});
