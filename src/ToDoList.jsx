import React from 'react'
import Button from '@material-ui/core/Button'

const ToDoList = (props) => {

  return (
    <>
    <div className="todo-style">
    <i className="fa-solid fa-xmark" aria-hidden = "true"
        onClick = {() => {props.onSelect(props.id)} }/><i/>
         <li>{props.text}</li>
    </div>
    </>
  )
}

export default ToDoList