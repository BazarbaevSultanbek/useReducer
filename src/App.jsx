import { useState } from 'react'
import './App.css'
import Todo from './components/Tasks/Todo'
import Cart from './components/Cart/Cart'
import Game from './components/Game/Game'
import Fetch from './components/Fetch/Fetch'
import Local from './components/Local/Local'
import Wait from './components/Wait/Wait'

function App() {
  const [page, setPage] = useState('Todo')


  const ModifyPage = () => {
    switch (page) {
      case 'Todo':
        return <Todo />
      case 'cart':
        return <Cart />
      case 'Game':
        return <Game />
      case 'Fetch':
        return <Fetch />
      case 'Local':
        return <Local />
      case 'Wait':
        return <Wait />
        
    }
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="App-header">
          <h3>useReducer, Customized hooks</h3>
        </div>
        <div className="App-block">
          <ul>
            <li onClick={() => { setPage('Todo') }}>Todo</li>
            <li onClick={() => { setPage('cart') }}>store</li>
            <li onClick={() => { setPage('Game') }}>game</li>
            <li onClick={() => { setPage('Fetch') }}>Fetch</li>
            <li onClick={() => { setPage('Local') }}>local</li>
            <li onClick={() => { setPage('') }}>Wait</li>
          </ul>
        </div>
        <div className="page-content">{ModifyPage()}</div>
      </div>
    </div>
  )
}

export default App
