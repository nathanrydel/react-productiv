import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos: [{ id, title, description, priority }]
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  console.log("TopTodo renders: ", todos)

  // lowest-priority # is the highest priority
  const top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;