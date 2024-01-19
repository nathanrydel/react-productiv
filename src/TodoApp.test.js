import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

const TODOS = [
  { id: 1, title: "Test1", description: "desc", priority: 1 },
  { id: 2, title: "Test2", description: "desc2", priority: 3 },
  { id: 3, title: "Test3", description: "desc3", priority: 2 },
]

// beforeEach()

// TodoApp smoke Test
describe("TodoApp smoke test", function () {
  test("it renders without crashing", function () {
    render(<TodoApp initialTodos={TODOS} />);
  });
});

// Renders Todos area with 1 Todo Present and Top Todo with a Todo

describe("Rendering TodoApp with content", function () {
  test("Todos area renders with a todo", function () {
    const result = render(<TodoApp initialTodos={TODOS} />)

    expect(result.queryByText("Todos")).toBeInTheDocument();
    expect(result.queryByText("Top Todo")).toBeInTheDocument();
    expect(result.queryAllByText("Test1")).toHaveLength(2);
    expect(result.queryByText("Test2")).toBeInTheDocument();
    expect(result.queryByText("Test3")).toBeInTheDocument();
  })
  // Snapshot of rendered Todos
  test("matches snapshot of correct result", function () {
    const result = render(<TodoApp initialTodos={TODOS} />)

    expect(result).toMatchSnapshot();
  });
});

// Renders Todos area with message You have no todos and TopTodo with No todos yet!
// Snapshot of No Todos

describe("Rendering ToDoApp with no content", function () {
  tests("Todos area without todos", function () {
    const result = render(<TodoApp initialTodos={[]}/>);

    expect(result.queryByText("Todos")).toBeInTheDocument();
    expect(result.queryByText("You have no todos")).toBeInTheDocument();
    expect(result.queryByText("No todos yet!")).toBeInTheDocument();
    expect(result.queryByText("Test1")).not.toBeInTheDocument();
    expect(result.queryByText("Test2")).not.toBeInTheDocument();
    expect(result.queryByText("Test3")).not.toBeInTheDocument();
  });

  // Snapshot of rendered Todos (no todos)
  test("matches snapshot of correct result", function () {
    const result = render(<TodoApp initialTodos={[]} />)

    expect(result).toMatchSnapshot();
  });
});