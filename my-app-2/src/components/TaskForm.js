import React,{ Component } from 'react';

class TaskForm extends Component{
    state = {title: '',description: '',area:''};
    handleSubmit = (event) =>{
        console.log(this.state);
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
        <label>
          Name:
          <input name = "description" type="text" value={this.state.description} onChange={this.handleChange} />
        </label>
        <textarea name = "area" type = "text" onChange = {this.handleChange} value = {this.state.area}></textarea>
        <input type="submit" value="Submit" />
      </form>
       </div>
   }
}

export default TaskForm;
