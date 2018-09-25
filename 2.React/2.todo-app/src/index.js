import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import "./styles.css";

const Active = styled.div`
  font-weight: bold;
`;

const Done = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
      completed: [],
      total: 0
    };
  }
  render() {
    let active = this.props.tasks.filter(task => !task.done),
        completed = this.props.tasks.filter(task => task.done), 
        total = this.props.tasks.length
    return (
      <div>
        {active.map(task => <Active>{task.title}</Active>)}
        {completed.map(task => <Done>{task.title}</Done>)}
        <Total>Total tasks: {total}</Total>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {title: "Wash dishes", done: false},
        {title: "Read book", done: false},
        {title: "Get some sleep", done: true},
      ]
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask = () => {
    const defaultTask = {
      title: 'new task', 
      done: false
    }
    this.setState((state) => {
      return {
        tasks : state.tasks.concat(defaultTask)
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.addTask}>Add Task</button>
        <Tasks tasks={this.state.tasks}/>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
