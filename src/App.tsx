import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/index'
import ToDoList from './componentes/ToDoList/index'
import UserData from './componentes/UserData/index'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserData />
        <ToDoList />
      </Provider>
    </div>
  );
}

export default App;
