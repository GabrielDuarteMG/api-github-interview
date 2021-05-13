import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header in DOM", () => {
  render(<App />);
  const linkElement = screen.getByText(/Início/i);
  expect(linkElement).toBeInTheDocument();
});
