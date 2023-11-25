import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test for Snakelbaars", () => {
  render(<App />);
  const linkElement = screen.getByText(/Snakelbaars/i);
  expect(linkElement).toBeInTheDocument();
});
