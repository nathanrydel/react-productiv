import React, { useState } from "react";

const defaultFormData = { title: "", description: "", priority: 1 };
// TODO: repeating in line 36
// TODO: global constant, screaming case

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * State:
 * - formData: title, description, priority fields
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ initialFormData = defaultFormData, handleSave }) {
  const [formData, setFormData] = useState(initialFormData);

  console.log("TodoForm renders: ", formData);

  /** Update form input. */
  function handleChange(evt) {
    const change = evt.target;
    // TODO: "field", "fieldName", "fieldToChange" for better var name

    // TODO: if change === priority, then coerce to Number
    // or have different fn "handleNumChange"
    // the sooner you can coerce priority to num type, the better
    setFormData(fData => ({
      ...fData,
      [change.name]: change.value
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData({ title: "", description: "", priority: 1 });
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="mb-3">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
