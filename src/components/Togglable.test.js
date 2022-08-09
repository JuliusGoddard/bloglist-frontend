import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Togglable from "./Togglable";
import Blog from "./Blog";

describe("<Togglable />", () => {
  const blog = {
    title: "Title",
    author: "J John",
    url: "www.url.com",
    likes: 0,
  };

  let container;

  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="view">
        <div className="testDiv">Test content</div>
      </Togglable>
    ).container;
  });

  test("renders its children", () => {
    screen.queryByText("Title");
  });

  test("at start the children are not displayed", () => {
    const div = container.querySelector(".togglableContent");
    expect(div).toHaveStyle("display: none");
  });

  test("after clicking the button, children are displayed", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);

    const div = container.querySelector(".togglableContent");
    expect(div).not.toHaveStyle("display: none");
  });

  test("after clicking the button, the url and likes are displayed", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);

    const div = container.querySelector(".togglableContent");
    expect(div).not.toContain("url");
  });
});
