import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [show, setshow] = useState(false)
  const ref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  const getPasswords = async() => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setpasswordArray(passwords)
    console.log(passwords)
  }
  

  useEffect(() => {
    getPasswords()
    /* let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    } */
  }, [])


  const showPass = () => {
    if (ref.current.src.includes("/view.png")) {
      ref.current.src = "/hide.png"
    }
    else {
      ref.current.src = "/view.png"
    }
  }

  const savePassword = async() => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      //if any such id exists in the db,delete it
      await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({id : form.id}) })

      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
      /* localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, form]) */
      setform({ site: "", username: "", password: "" }) //clears the form
      toast('Password saved !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      toast('Failed to Save !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const editPassword = (id) => {
    {
      console.log("editing - " + id)
      setform(passwordArray.filter(i => i.id === id)[0])
      let c = confirm("Do you want to remove and edit the password")
      if (c) {
        setpasswordArray(passwordArray.filter(i => i.id !== id))
      }
    }
  }

  const deletePassword = async(id) => {
    {
      console.log("deleting - " + id)
      setpasswordArray(passwordArray.filter(item => item.id != id))
      //localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
      let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({  id}) })
      toast('Password deleted !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copytext = (text) => {
    toast('Text copied succesfully !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text)
  }


  return (
    <>
      <div className='z-50'>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
      

      <div className='my-12 relative min-h-100dvh'>



        <div className='text-center '>
          <div className="logo font-bold text-4xl">
            <span className='text-green-700'>&lt;</span>
            <span>pass</span><span className='text-green-700'>Op</span>
            <span className='text-green-700'>/&gt;</span>
          </div>
          <div>Your own password manager</div>
        </div>

        <div className=" container flex flex-col p-4 mx-auto max-w-2xl">
          <input value={form.site} name='site' onChange={handleChange} placeholder='Enter Website URL' className='border rounded-full border-black px-3' type="text" />
          <div className='flex gap-5 my-4 relative'>
            <input value={form.username} name='username' onChange={handleChange} placeholder='Enter Username' className='border rounded-full border-black w-1/2 px-3' type="text" />
            <input value={form.password} name='password' onChange={handleChange} placeholder='Enter Password' className='border rounded-full border-black w-1/2 px-3' type={show ? "text" : "password"} />
            <img ref={ref} className='absolute w-6 top-0 right-1 opacity-45 hover:opacity-75' src="/view.png" onClick={() => { showPass(); setshow(!show) }} alt="" />
          </div>
          <div className='mx-auto border border-black px-2 rounded-full '>
            <button onClick={savePassword} className='flex justify-center items-center gap-2'><lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover">
            </lord-icon><span>Save</span> </button>
          </div>
        </div>

        <div className='mx-auto max-w-2xl text-2xl font-bold'>Your Password</div>

        <div className="passwords my-2 flex justify-center mx-auto">
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <div className='m-5'>
            <table className="table-auto min-w-[60vw] bg-purple-200">
              <thead>
                <tr>
                  <th className='px-4 py-2 border border-white'>Site</th>
                  <th className='px-4 py-2 border border-white'>Username</th>
                  <th className='px-4 py-2 border border-white'>Password</th>
                  <th className='px-4 py-2 border border-white'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>

                    <td className='px-4 py-2 border border-white text-center'>
                      <div className='flex justify-center items-center gap-2'>
                        <a href={item.site} target='_blank'>{item.site}</a>
                        <img onClick={() => { copytext(item.site) }} src="/copy.png" className='w-3 pt-1 cursor-pointer' alt="" title='copy text' />
                      </div>
                    </td>

                    <td className='px-4 py-2 border border-white text-center'>
                      <div className='flex justify-center items-center gap-2'>
                        {item.username}
                        <img onClick={() => { copytext(item.username) }} src="/copy.png" className='w-3 pt-1 cursor-pointer' alt="" title='copy text' />
                      </div>
                    </td>

                    <td className='px-4 py-2 border border-white text-center'>
                      <div className='flex justify-center items-center gap-2'>
                        {item.password}
                        <img onClick={() => { copytext(item.password) }} src="/copy.png" className='w-3 pt-1 cursor-pointer' alt="" title='copy text' />
                      </div>
                    </td>

                    <td className='px-4 py-2 border border-white text-center'>
                      <div className='flex justify-center items-center gap-5'>
                        <div onClick={() => { editPassword(item.id) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                          >
                          </lord-icon>
                        </div>
                        <div onClick={() => { deletePassword(item.id) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/xyfswyxf.json"
                            trigger="hover"
                          >
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          </div>}
        </div>
      </div>
    </>
  )
}

export default Manager
