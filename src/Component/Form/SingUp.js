import { useState } from "react"

import {Link, useNavigate} from 'react-router-dom'
import './Form.css'
import { SingUpApi } from "../../API/Api"
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from "../Dashboard/Dashboard"
const SingUp=()=>{
    const [formData,setFormdata] =useState()
    const navigate = useNavigate()
    function handleChange(event){
        setFormdata({...formData,[event.target.name]:event.target.value})
       
    }
  async  function FormHandle(event){
        event.preventDefault()
        console.log(formData)
       const res = await SingUpApi(formData)
       console.log(res)
       if(res.status ==='success'){
              toast.success(res.message)
            navigate('./Dashboard')
       }
       else{alert(res.message)}
    }
    return (
        <>
            <div className="formDiv mobileFormDiv">
                <form onSubmit={FormHandle} autoComplete="off" className="formContent">
                    <h1>SignUp</h1>
                   <p> <input type='text' placeholder="Your Name" name='name' onChange={handleChange}></input></p>
                   <p> <input type='email' placeholder="Your Email" name='email'onChange={handleChange}></input></p>
                   <p> <input type='password' placeholder="Your password"name='password'onChange={handleChange}></input></p>
                    <p><input type='text' placeholder="Your Number" name='phone'onChange={handleChange}></input></p>
                    <input type='submit' value='Register' className="Button"></input>
                    <Link to='login'><input type='button' value='Login' className="Button"></input></Link>
                </form>


            </div>
        </>
    )
}
export default SingUp