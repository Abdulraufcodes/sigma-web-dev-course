import React,{useEffect} from 'react'

const Navbar = ({color}) => {

    // Case 1 : run on every render
  useEffect(() => {
     alert("This will run on every render")
  })
  
  // Case 2 : run only on first render
  useEffect(() => {
    alert("welcome to my page")
  }, [])

  // Case 3 : run only when certain values change
    useEffect(() => {
      alert("color was changed")
    }, [color])

    // Example of Cleanup function
    useEffect(() => {
      alert("First render of app.jsx")
    
      //this return function will run when we remove navbar from the app.jsx
      return () => {
        alert("Component was unmounted")
      }
    }, [])
    
    
  return (
    <div>
      I am a Navbar of {color} color.
    </div>
  )
}

export default Navbar
