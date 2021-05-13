import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  queryByAttribute,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Users from "./Users";
import { BrowserRouter as Router } from "react-router-dom";

test("renders normal page", async () => {
  render(<Users />);

  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "GabrielDuarteMG" },
  });
  fireEvent.click(screen.getByText("Buscar"));

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent(
    "Buscar nome de usuário"
  );
});

test("should be get user by path", () => {
  const defaultProps = {
    match: { params: { userName: "GabrielDuarteMG" } },
  };
  var dom = render(<Users {...defaultProps} />);
  const usernameInput = screen.getAllByPlaceholderText("Username");
  var userValue = usernameInput[0].value;
  expect(userValue).toEqual("GabrielDuarteMG");
});
test("should be get user by path", () => {
  var dom = render(<Users />);
  const usernameInput = screen.getAllByPlaceholderText("Username");

  fireEvent.keyDown(dom.container.querySelector("form"), {
    key: "Enter",
    code: 13,
    charCode: 13,
  });

  expect(screen.getByRole("heading")).toHaveTextContent(
    "Buscar nome de usuário"
  );
});
