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

describe("TodoForm DOM changes and submit event testing", function () {
  test("Changing form inputs updates the DOM",
    function () {
      const result = render(<TodoForm handleSave={handleSave} />);

      const titleInput = result.getByPlaceholderText("Title");
      const descriptionInput = result.getByPlaceholderText("Description");
      const priorityInput = result.getByLabelText("Priority:");

      expect(titleInput).toHaveValue("")
      fireEvent.change(titleInput, { target: { value: "Test1 Title" } });
      expect(titleInput).toHaveValue("Test1 Title")

      expect(descriptionInput).toHaveValue("")
      fireEvent.change(descriptionInput, { target: { value: "Test descr" } });
      expect(descriptionInput).toHaveValue("Test descr")

      expect(priorityInput).toHaveValue("1")
      fireEvent.change(priorityInput, { target: { value: 3 } });
      expect(priorityInput).toHaveValue("3")
    });

    test("Clicking Gø! submits the TodoForm", function () {
      const result = render(<TodoForm handleSave={handleSave} />);
      const submitBtn = result.getByText("Gø!");
      fireEvent.click(submitBtn);
      expect(handleSave).toBeCalledTimes(1);

    })
});
