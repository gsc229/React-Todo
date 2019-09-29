import React from 'react';
import TodoList from './TodoList';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    });

    console.log('The new searchTerm is: ', this.state.searchTerm);
  };

  render() {
    return (
      <div className='search-bar'>
        <input
          placeholder='Search for task'
          name='searchTerm'
          value={this.state.searchTerm}
          onChange={this.handleChanges}
          type='text'
        />
        <TodoList
          toggleComplete={this.props.toggleComplete}
          removeCompleted={this.props.removeCompleted}
          searchTerm={this.state.searchTerm}
          tasks={this.props.tasks}
        />
      </div>
    );
  }
}

export default SearchBar;
