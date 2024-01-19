import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  const top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  // TODO: does this work?
  return <Todo {...top} />;
}

export default TopTodo;