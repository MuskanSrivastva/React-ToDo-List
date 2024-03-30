import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App = () => {
  const[inputList,setInputList] = useState("");

  const[item,setItem] = useState([])


  const itemEvent = (e) =>{
    setInputList(e.target.value);
  };


  const listOfItem = () =>{
    setItem((oldItem) => {
      return[...oldItem,inputList]
    })
    setInputList('')
  }

  const deleteItem =(id) =>{
    console.log("Deleted");

    setItem((oldItem) => {
      return  oldItem.filter((arrElement,index) =>{
        return index !== id;
      });
    });
};

  return(
    <>
      <div className="main-div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input type="text" placeholder='Add your items' 
          value = {inputList} onChange={itemEvent} />
          <button onClick = {listOfItem}>+</button>
          <ol>
            {item.map((itemval,index)=>{
             return(
              <ToDoList key = {index}
              id = {index}
              text = {itemval}
              onSelect = {deleteItem}
             />);
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;