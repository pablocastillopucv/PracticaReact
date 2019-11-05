import React,{ Component } from 'react';

class TaskForm extends Component{
    state = {title: '',description: ''};
    handleSubmit = (event) =>{
        
        this.props.addtask(this.state.title,this.state.description);
        event.preventDefault();
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render(){

      
       return <div>
           <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name = "title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <br></br>
        <br></br>
        <textarea name = "description" type = "text" onChange = {this.handleChange} value = {this.state.description}></textarea>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
       </div>
   }
}

export default TaskForm;
