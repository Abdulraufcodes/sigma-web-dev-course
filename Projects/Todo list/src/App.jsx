import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {

  // used to add todo
  const [todo, setTodo] = useState("")
  // used as an array of todo
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)



  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }


  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newtodos)
    saveToLS()
  }

  const handleDelete = (id) => {
    let newtodos = todos.filter(item => item.id !== id)
    setTodos(newtodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]) //adds current todo to the todos array
    setTodo("")   //sets the input field to empty
    saveToLS()
  }

  const handlechange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let newtodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      } else {
        return item
      }
    })
    setTodos(newtodos)
    saveToLS()
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[95%] md:w-[60%] rounded-xl p-5 my-5 h-96 min-h-[80vh]">
        <h1 className='font-bold text-2xl text-center my-5'>iTask-Manage all you todos</h1>
        <h1 className="font-bold">Add Todo</h1>
        <div className="addtodo flex flex-col md:flex-row">
          <input onChange={handlechange} value={todo} type="text" placeholder='Enter task' className="w-full md:w-1/2 text-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white placeholder-gray-300 rounded-lg" />
          <button onClick={handleAdd} disabled={todo.length < 3} className="cursor-pointer  disabled:bg-white/10 disabled:text-gray-300 bg-white/30 backdrop-blur-none py-1 px-3 rounded-md md:ml-4 my-2 md:my-0 text-white hover:bg-white/40">ADD</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" className='my-3' />Show finished

        <h1 className="font-bold">Your todos</h1>

        <div className='todos'>
          {todos.length === 0 && <div className='m-5 text-gray-200'>No todos to display</div>}

          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 md:max-w-[50vw] justify-between">
              <div className="content flex gap-3">
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id='' />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className='buttons flex h-full'>
                <button onClick={() => handleEdit(item.id)} className="cursor-pointer bg-white/30 backdrop-blur-none px-1 rounded-md ml-4 text-white hover:bg-white/40">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="cursor-pointer bg-white/30 backdrop-blur-none px-1 rounded-md ml-4 text-white hover:bg-white/40">delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
