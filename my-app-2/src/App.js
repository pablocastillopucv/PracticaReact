import React from 'react';
import './App.css';
import task from './sample/task.json'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm';
class App extends React.Component{
  state = {
    task:task
  }
  render(){
    return <div>
          <TaskForm></TaskForm>
          <Tasks task={this.state.task} ></Tasks>
        
    </div>
  }
  
}

export default App;
