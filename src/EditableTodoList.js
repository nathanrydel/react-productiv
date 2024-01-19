import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos:  [ { id, title, description, priority }, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("EditableTodoList renders", todos);

  return (
    todos.map(todo => (
      <EditableTodo
        key={todo.id}
        todo={todo}
        update={update}
        remove={remove}
      />
    ))
  );
}

export default EditableTodoList;
