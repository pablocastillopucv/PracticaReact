import React from 'react';
import './App.css';
import task from './sample/task.json'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm';
class App extends React.Component{
  state = { // tiene toda las tareas
    task:task
  }
  addTask = (title,description) =>{
    const newTask={
      title:title,
      description:description,
      id:this.state.task.length
    }
    this.setState({
      task: [...this.state.task,newTask]
    })
  }
  
  render(){
    
    return <div>
          <TaskForm addtask = {this.addTask}></TaskForm>
          <Tasks task={this.state.task} ></Tasks>
        
    </div>
  }
  
}

export default App;
