import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setshow] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "todo 1", desc: "I am good"
    },
    {
      title: "todo 2", desc: "I am good 2"
    },
    {
      title: "todo 3", desc: "I am good 3"
    }
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* method 1 - conditional rendering */}
      {show?<button>this is show</button>:""}    

      {/* list rendering */}
      {todos.map(todo => {
        return <div className='border-2 border-white m-4'>
          <div className="todos">{todo.title}</div>
          <div className="todos">{todo.desc}</div>
        </div>
      })}

      {/* toogle for button */}  
      <div className="card">
        <button onClick={() => setshow(!show)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
