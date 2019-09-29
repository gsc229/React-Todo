import React from 'react';
import Todo from './Todo';
import SearchBar from './SearchBar';

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
      {filteredTasks.map(taskObj => (
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
