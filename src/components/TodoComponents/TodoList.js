import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  /* const filteredTasks = props.tasks.filter(item => {
    item.task.toLowerCase().includes(props.searchTerm.toLowerCase());
  }); */
  const filteredTasks = props.tasks.filter(item =>
    item.task.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  console.log('Todo.js filteredTasks: ', filteredTasks);
  return (
    <div className='todo-list'>
      <div className='todo-header'>
        <h1>Todo List: </h1>
        <button onClick={props.removeCompleted}>Clear Completed</button>
      </div>

      {filteredTasks.map(taskObj => (
        <Todo
          key={taskObj.id}
          taskObj={taskObj}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
