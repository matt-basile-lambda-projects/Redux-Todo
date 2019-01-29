import React from 'react';
// import {connect} from 'react-redux'

class TodoItem extends React.Component{
    render(props){
        console.log(this.props)
        return(
            <div className="todo-item">
                <h3 className={this.props.todo.completed ? 'strike': ''} onClick={()=>this.props.toggleTodo(this.props.todo)}>{this.props.todo.value}</h3>
                <div className="delete" onClick={()=>this.props.deleteTodo(this.props.todo)}>X</div>
            </div>
        )
    }
}

export default TodoItem