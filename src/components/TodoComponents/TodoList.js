import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.data.map(taskObj => (
        <Todo
          key={taskObj.id}
          taskObj={taskObj}
          toggleComplete={props.toggleComplete}
        />
      ))}
      <button onClick={props.removeCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
