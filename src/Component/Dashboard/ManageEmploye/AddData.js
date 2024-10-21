import { useCallback, useState, memo, useEffect } from "react"
import { MdCancel } from "react-icons/md";
import { EmployeApi } from "../../../API/Api"
import ManageData from "./ManageData";
// import DashboardEmployeManage from "./DashboardEmplayeeManage"
const AddData = (props) => {
    const [data, setData] = useState()
    // const [AddDisable , setAddDisable] = useState(true)
    
    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })   
    }
    async function HanldeSubmit(event) {
        event.preventDefault()
        console.log(data)
        const sentData = await EmployeApi(data)
        console.log(sentData)
    }

    return (
        <>
            <div className="formData">
                <form onSubmit={HanldeSubmit} className="formContent" autoComplete="off">
                    <MdCancel className="cancelIcon" onClick={() => props.fun()} />
                    <input type="text" placeholder="Emp Name" name='empName' onChange={handleChange}></input>
                    <input type="text" placeholder="Emp Email" name='empEmail' onChange={handleChange}></input>
                    <input type="number" placeholder="Emp Age" name='empAge' onChange ={handleChange}></input>
                    <input type="text" placeholder="Emp Field" name='empField' onChange={handleChange}></input>
                    <input type='submit'value='Add'></input>
                </form>

            </div>
        </>
    )
}
export default AddData