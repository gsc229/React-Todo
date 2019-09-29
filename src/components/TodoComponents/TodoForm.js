import React from "react";

//Todo form needs:
//1. a constructor with state taht has taskName
//2. an input that will change the state of the task name
//3. handleChanges action handler that will update the new state
//4. use the onChange on the input.

class TodoForm extends React.Component {
  //we handed down the addTask function from App, could call it in props here
  //but it's being called through automatically becuase of super();
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
    console.log("The new task is: ", this.state.newTask);
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      newTask: event.target.value
    });
  };

  //this is where we call props.addTask
  passNewTask = event => {
    this.props.addTask(event, this.state.newTask);
    this.setState({
      newTask: ""
    });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.passNewTask} action="">
        <input
          type="text"
          name="task"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button>Add to list</button>
      </form>
    );
  }
}

export default TodoForm;
