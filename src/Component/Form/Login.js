import { useState } from "react"
import { LoginApi } from "../../API/Api"
import { useNavigate } from "react-router-dom"
import { setStorage } from "../../utils/Storage"
export default function Login(){
    const [data,setFormdata] = useState()
    const navigate = useNavigate()
    function handleChange(event){
        setFormdata({...data,[event.target.name]:event.target.value})
    }
  async function FormSumbit(event){
        event.preventDefault()
        console.log(data)
        const res = await LoginApi(data)
        console.log(res);
        if(res.status === 'success'){
            // localStorage.setItem("logininfo",JSON.stringify(res))
            setStorage(res)
            navigate('/dashboard')
        }else{alert(res.message)}
    }
    
    return(
        <>
        <div className="formDiv" onSubmit={FormSumbit}>
          
            <form className="formContent">
                <h1>Login</h1>
            <p> <input type='email' placeholder="Your Email" onChange={handleChange} name='email'></input></p>
            <p> <input type='password' placeholder="Your password" onChange={handleChange}name='password'></input></p>
            <input type='submit' value='Login' className="Button"></input>
            </form>
        </div>
        </>
    )
}