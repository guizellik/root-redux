import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

const initialStateToDoList = {
  arrayToDo: []
}

function reducerToDoList (state = initialStateToDoList, action: any) {
  switch(action.type) {
    case 'GET_TO_DOS':
      return {
        ...state,
        arrayToDo: action.payload
      }
      default:
        return state
  }
}

const initialStateUser = {
    name: '',
    username: '',
    email: ''
}

function reducerUser (state = initialStateUser, action: any) {
  switch(action.type) {
    case 'GET_USER_DATA':
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
      }
    default:
      return state
  }
}

const createRootReducer = () => combineReducers({
  toDoList: reducerToDoList,
  userData: reducerUser
})

const store = createStore(createRootReducer())

export { store }