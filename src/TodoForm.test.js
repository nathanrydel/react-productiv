import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

const handleSave = jest.fn();

// TodoApp smoke Test
describe("TodoForm smoke test", function () {
  test("it renders without crashing", function () {
    render(<TodoForm handleSave={handleSave} />);
  });
});

describe("TodoForm submitting valid input", function () {
  test("submits valid input", function () {
    const result = render(<TodoForm handleSave={handleSave} />)

    const titleInput = result.getByPlaceholderText("Title");
    const descriptionInput = result.getByPlaceholderText("Description");
    const priorityInput = result.getByPlaceholderText("Ultra-Über");
    const submitBtn = result.querySelector(".NewTodoForm-addBtn");

    fireEvent.change(titleInput, { target: { value: "Test1 Title"}});
    fireEvent.change(descriptionInput, { target: { value: "Test descr"}});
    fireEvent.change(priorityInput, { target: { value: "Meh"}});
    fireEvent.click(submitBtn);

    expect(handleSave).toBeCalledTimes(1);
  });
});


// TodoApp snapshot
// describe("TodoForm smoke test", function () {
//   test("it renders without crashing", function () {
//     const { container, debug } = render(<TodoForm handleSave={handleSave} />);
//     expect(container).toMatchSnapshot();
//   });
// });
