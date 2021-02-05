import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserData = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(resposta => dispatch({type: 'GET_USER_DATA', payload: resposta.data}))
  },[dispatch])


  const name = useSelector((state: any) => state.userData.name)
  const username = useSelector((state: any) => state.userData.username)
  const email = useSelector((state: any) => state.userData.email)

  return (
    <>
      <h2>User: {name} </h2>
      <p>Username: {username}</p>
      <p>E-mail: {email}</p>
    </>
  )
}

export default UserData