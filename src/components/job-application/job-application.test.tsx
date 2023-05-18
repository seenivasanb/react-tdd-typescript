import { render, screen } from "@testing-library/react";
import JobApplication from "./job-application";

test("should render the correctly", () => {
  render(<JobApplication />);

  const headerElement = screen.getByRole("heading", {
    level: 1,
  });
  expect(headerElement).toBeInTheDocument();

  const sectionElement = screen.getByRole("heading", {
    level: 3,
  });
  expect(sectionElement).toBeInTheDocument();

  const nameElement = screen.getByRole("textbox", {
    name: "Name",
  });
  expect(nameElement).toBeInTheDocument();

  const bioElement = screen.getByRole("textbox", {
    name: "Bio",
  });
  expect(bioElement).toBeInTheDocument();

  const locationElement = screen.getByRole("combobox");
  expect(locationElement).toBeInTheDocument();

  const termsElemeent = screen.getByRole("checkbox");
  expect(termsElemeent).toBeInTheDocument();

  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
});
