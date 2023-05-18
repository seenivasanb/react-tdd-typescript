import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("should render component correctly", () => {
    render(<Users />);

    const heading = screen.getByText("Users");
    expect(heading).toBeInTheDocument();
  });

  test("should render the list of users", async () => {
    render(<Users />);
    const listOfUsers = await screen.findAllByRole("listitem");
    expect(listOfUsers).toHaveLength(3);
  });

  test("render server", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);

    const error = await screen.findByText("Error fetching users!");

    expect(error).toBeInTheDocument();
  });
});
