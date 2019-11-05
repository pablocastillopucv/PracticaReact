import React,{Component} from 'react';

class Task extends Component{
    styleText(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray': 'red'
        }
    }
    render(){
        const {task} = this.props;
        // es igual a const var1 = this.props.var1;
        return <p style = {this.styleText()}>
            {task.title}-
            {task.id}-
            {task.descripcion}-
            {task.done}
            <input type= "checkbox"></input>
            <button>x</button>
        </p>
    }
}

export default Task;