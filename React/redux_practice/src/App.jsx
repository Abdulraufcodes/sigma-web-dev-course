import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state)=> state.count.value)

  return (
    <>
      <div>
        {count}
      </div>
    </>
  )
}

export default App
