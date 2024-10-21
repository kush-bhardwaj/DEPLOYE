import { useEffect, useState } from "react";
import { FaHome , FaUser} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ClearStorage, getStorage } from "../../../utils/Storage";



export default function DashboardHeader(){
    const loginData =  getStorage()
    const navigate = useNavigate()
    useEffect(()=>{
            if(!loginData){
                navigate('/login')
            }
    },[])
    function Logout(){
        ClearStorage()
        navigate('/login')
        alert("You are Logged Out")
    }
    return(
        <>
            <header className="header">
                <div className="left">
                    <FaHome className="home"/>
                    
                </div>
                <div className="rigth">
                   <FaUser className="user"  />
                   <h3>{loginData.name}<sapn className='logout' onClick={Logout}>LogOut</sapn></h3>
                   
                </div>
            </header>
        
        </>
    )
}
