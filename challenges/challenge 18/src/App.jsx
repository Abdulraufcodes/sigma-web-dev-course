import { useState , useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setcards] = useState([])

  async function fetchdata() {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcards(data);
  }
  fetchdata();

  return (
    <>
      <Navbar/>
      <div className="container grid grid-cols-4 ">
        {cards.map((card) => {
          return <div key={card.id} className="card  border-black border-2 m-3">
            <h1 className='font-bold'>{card.title}</h1>
            <p>{card.body}</p>
          </div>
        })}

      </div>
    </>
  )
}

export default App
