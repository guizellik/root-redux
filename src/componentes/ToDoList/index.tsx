import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToDoList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resposta => dispatch({type: 'GET_TO_DOS', payload: resposta.data}))
  },[dispatch])

  const arrayToDoList = useSelector((state: any) => state.toDoList.arrayToDo)

  return (
    <>
    <h1>To Do List </h1>
    <ul>
      {
        arrayToDoList.map((toDo: any) => {
          return (
            <li key={toDo.id}>{toDo.id} - {toDo.title}</li>
          )
        })
      }
    </ul>
    </>
  )
}

export default ToDoList