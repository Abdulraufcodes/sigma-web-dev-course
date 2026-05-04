import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i) => { //fill gives 0 to all indices and map gives two objects to every index
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [Numbers, setNumbers] = useState(nums)

  //const magical = Numbers.find(item=>item.isMagical==true) //finds a number with isMagical index; this will run everytime button is clicked
  const magical = useMemo(() => Numbers.find(item => item.isMagical == true), [Numbers]) //this will prevent from rendering every time and will only

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if (count == 10) {
            setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 9_000_000
              }
            }))
          }
        }}>
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
