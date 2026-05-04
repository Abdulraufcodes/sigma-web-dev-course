import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Rauf")
  const [form, setform] = useState({email:"", phone:""})

  const handleclick = () => {
    alert("I am clicked");
  }

  const handlechange = (e) => {
    // setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div>
        <button onClick={handleclick}>click me</button>
      </div>
      {/* <input type="text" value={name} onChange={handlechange} /> */}
      <input type="text" name='email' value={form.email} onChange={handlechange}/>
      <input type="text" name='phone' value={form.phone} onChange={handlechange}/>
    </>
  )
}

export default App
 