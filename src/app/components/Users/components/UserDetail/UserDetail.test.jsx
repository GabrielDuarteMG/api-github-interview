import React from "react";
import {
  render,
  queryByAttribute,
  waitFor,
  waitForElement,
  screen,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserDetail from "./UserDetail";
import axiosMock from "axios";
import constsTest from "../../../../shared/constants_tests";

test("should be populate name and username label", async () => {
  var userSelected = constsTest.USER_DATA_RESPONSE;
  var dom = render(<UserDetail userSelected={userSelected} />);
  const getById = queryByAttribute.bind(null, "id");
  const nameTitle = getById(dom.container, "user-detail-name");
  const usernameLabel = getById(dom.container, "user-detail-username");

  expect(nameTitle).toHaveTextContent("Gabriel Duarte");
  expect(usernameLabel).toHaveTextContent("@GabrielDuarteMG");
});

test("should be open repositories modal", async () => {
  const getById = queryByAttribute.bind(null, "id");

  var userSelected = constsTest.USER_DATA_RESPONSE;
  var dom = render(<UserDetail userSelected={userSelected} />);
  fireEvent.click(getById(dom.container, "open-repos-btn"));

  await setTimeout(async () => {
    const modalTitle = await waitFor(() =>
      getById(dom.container, "repos-modal-title")
    );
    expect(modalTitle).toHaveTextContent("Repositórios");
  }, 2000);
});
test("should be open starred modal", async () => {
  const getById = queryByAttribute.bind(null, "id");

  var userSelected = constsTest.USER_DATA_RESPONSE;
  var dom = render(<UserDetail userSelected={userSelected} />);
  fireEvent.click(getById(dom.container, "open-starred-btn"));

  await setTimeout(async () => {
    const modalTitle = await waitFor(() =>
      getById(dom.container, "repos-modal-title")
    );
    expect(modalTitle).toHaveTextContent("Starred");
  }, 2000);
});
test("should be close modal", async () => {
  const getById = queryByAttribute.bind(null, "id");

  var userSelected = constsTest.USER_DATA_RESPONSE;
  var dom = render(<UserDetail userSelected={userSelected} />);
  fireEvent.click(getById(dom.container, "open-starred-btn"));
  setTimeout(async () => {
    await waitFor(() => getById(dom.container, "repos-modal-title"));
    const modalTitle = getById(dom.container, "repos-modal-title");
    const closeBtn = screen.getByText(/Fechar/i);
    fireEvent.click(closeBtn);
    expect(modalTitle).not.toHaveTextContent("Starred");
  }, 2000);
});
