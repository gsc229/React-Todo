import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const tasks = [
  {
    task: "Go to store",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Walk Dog",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Mow lawn",
    id: 1528817084360,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  //Will need an addTask event handler to take the input value, change the state, and update the list.
  addTask = (event, newTask) => {
    event.preventDefault();
    if (newTask !== "") {
      const currentTask = {
        task: newTask,
        id: Date.now(),
        completed: false
      };
      /* function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1; (replace with turnary operator)
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
} */
      const alphaList = [...this.state.tasks, currentTask].sort(function(
        taskA,
        taskB
      ) {
        return taskA.task.toLowerCase() < taskB.task.toLowerCase() ? -1 : 1;
      });
      this.setState({
        tasks: alphaList
      });
    } else {
      alert("You didn't write a new task!");
    }
  };
  // Will need a removeCompleted event handler:
  removeCompleted = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };

  // toggle completed taskId comes from Todo.js div's onClick={() => toggleComplete(props.taskObj.id)}
  toggleComplete = taskId => {
    console.log("App.js: App: toggleItem: ", taskId);
    //setState() is a special method that is part of react components
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === taskId) {
          //spread out the keys (...item), overtite completed with opposite of current value (t/f) !item.completed
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h1>Todo List: </h1>
        <TodoForm addTask={this.addTask} />
        <TodoList
          data={this.state.tasks}
          toggleComplete={this.toggleComplete}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
