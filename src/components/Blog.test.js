import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import Blog from "./Blog";
import userEvent from "@testing-library/user-event";

test("renders content", () => {
  const blog = {
    title: "Title",
    author: "J John",
    url: "www.url.com",
    likes: 0,
  };

  const { container } = render(<Blog blog={blog} />);

  const div = container.querySelector(".blog");
  expect(div).toHaveTextContent("Title J John");
});

test("clicking the view button displays url and number of likes", () => {
  const blog = {
    title: "Title",
    author: "J John",
    url: "www.url.com",
    likes: 0,
  };

  const component = render(<Blog blog={blog} />);

  const button = component.getByText("view");
  fireEvent.click(button);

  expect(component.container).toHaveTextContent("www.url.com");

  expect(component.container).toHaveTextContent("0");
});

test("clicking the like button twice calls event handler twice", async () => {
  const blog = {
    title: "Title",
    author: "J John",
    url: "www.url.com",
    likes: 0,
  };

  const handleLike = jest.fn();

  render(<Blog blog={blog} handleLike={handleLike} />);

  const user = userEvent.setup();
  const button = screen.getByText("Like");
  await user.click(button);
  await user.click(button);

  expect(handleLike.mock.calls).toHaveLength(2);
});
