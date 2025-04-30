import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";


test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text About Me", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a/i, { exact: false });
  expect(paragraph).toBeInTheDocument();
});

test("displays two links: GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));

  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
