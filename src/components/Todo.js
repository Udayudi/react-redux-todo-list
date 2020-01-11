import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addNewTodo} from '../actions/todoactions'

class Todo extends Component {
constructor() {
    super();
    this.state = {
        newTodo: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
        // console.log(this.state.newTodo);
    }

        render() {
            // console.log('this.props: ', this.props);  
            let todoslist = this.props.todos.map((todo, i) => { 
                return (
                    <li key={i}>{todo}</li>
                )
            })
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.state.newTodo}
                    name="newTodo"
                    onChange={this.onChange}
                /> 
                <button type="submit">Submit</button>
            </form>   

            <h1>List of Todos</h1>
                <ul>{todoslist}</ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log('state',state);
    return {
         todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return{
        addNewTodo : bindActionCreators(addNewTodo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
