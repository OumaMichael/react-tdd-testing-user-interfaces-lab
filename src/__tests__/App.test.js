import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with appropriate alt text", () => {
  // Arrange
  render(<App />);

  // Act
  const profileImage = screen.getByRole("img");

  // Assert
  expect(profileImage).toBeInTheDocument();
  expect(profileImage).toHaveAttribute("src");
  expect(profileImage).toHaveAttribute("alt");
});

test("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);

  // Act
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  // Assert
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  // Arrange
  render(<App />);

  // Act
  // Use the container query to be more specific
  const { container } = render(<App />);
  const bioParagraph = container.querySelector('p');

  // Assert
  expect(bioParagraph).toBeInTheDocument();
  expect(bioParagraph.textContent.length).toBeGreaterThan(0);
});

test("displays a link to GitHub profile", () => {
  // Arrange
  render(<App />);

  // Act
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });

  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href");
});

test("displays a link to LinkedIn profile", () => {
  // Arrange
  render(<App />);

  // Act
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  // Assert
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href");
});
