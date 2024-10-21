import { useEffect, useState } from 'react';
import './Dashboard.css'
import DashboardHeader from "./layout/DasboardHeader";
import DashboardEmployeManage from "./ManageEmploye/DashboardEmplayeeManage";
import ManageData from "./ManageEmploye/ManageData";
import { getAllEmployeeApi } from '../../API/Api';

const Dashboard =()=>{
    const [employeeList,setEmployeeList] = useState([])
    useEffect(()=>{
        getAllEmployeeApi().then((res)=>{
            console.log(res)
                    if(res)
                        setEmployeeList(res)
        }).catch(err=>{
                console.error("Catch Error")
        })
    },[])
    return(
        <>
         <DashboardHeader listEmployee = {employeeList}/>
         <DashboardEmployeManage listEmployee = {employeeList}/>
         <ManageData listEmployee = {employeeList}/>
        </>
    )
}
export default Dashboard;