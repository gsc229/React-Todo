import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div
      //using turnary operator to dynamically assign the completed class,
      // css for .completed{text-decoration: line-through}
      className={`task${props.taskObj.completed ? " completed" : ""}`}
      onClick={() => props.toggleComplete(props.taskObj.id)}
    >
      <h1>{props.taskObj.task}</h1>
    </div>
  );
};

export default Todo;
