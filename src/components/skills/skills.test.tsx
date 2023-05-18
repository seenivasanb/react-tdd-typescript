import { fireEvent, render, screen } from "@testing-library/react";
import Skills from "./skills";

const setup = () => {
  const listOfSkills = ["React", "TypeScript", "JavaScritp"];
  render(<Skills skills={listOfSkills} />);
};

test("should render list", () => {
  setup();

  const listElement = screen.getByRole("heading");
  expect(listElement).toBeInTheDocument();
});

test("should render no of skills", () => {
  setup();

  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();

  const listOfItemElements = screen.getAllByRole("listitem");
  expect(listOfItemElements).toHaveLength(3);
});

test("should render the login button", () => {
  setup();

  const buttonElement = screen.getByRole("button", {
    name: "Login",
  });
  expect(buttonElement).toBeInTheDocument();
});

test("should render the logout button", () => {
  setup();
  const buttonElement = screen.getByRole("button", {
    name: "Login",
  });

  fireEvent.click(buttonElement);

  const logoutButton = screen.getByRole("button", {
    name: "Logout",
  });
  const loginButton = screen.queryByRole("button", {
    name: "Login",
  });
  expect(logoutButton).toBeInTheDocument();
  expect(loginButton).not.toBeInTheDocument();
});
