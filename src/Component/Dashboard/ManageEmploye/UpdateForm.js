import {useState,useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UpdateEmpApi } from '../../../API/Api'
// import { MdCancel } from "react-icons/md";

export default function UpdateForm({updateData}){
  console.log(updateData)
  const [UpdateFormData,setUpdateFormData] = useState(updateData)
  function handleChange(event){
    setUpdateFormData({...UpdateFormData,[event.target.name]:event.target.value})
  }
  async function HanldeSubmit(event){
    event.preventDefault()
      const sentUpdateData = await UpdateEmpApi(UpdateFormData)
      console.log(sentUpdateData)
      if(sentUpdateData.status === 'success')
      alert('Update Success')
    else{console.log("Update failed")}
    
    console.log(UpdateFormData)
    
  }

  // useEffect(()=>{
  //    if(props.updateModal)
  //           handleShow();
  //     else{
  //       handleClose();
  //     }
  // },[props])
    return (
      <>
       {/* UPDATE FORM */}
       

               {/* UPDATE FORM START */}
      
      
      {/*  UPDARE  FORM END*/}
      
      <div className="formData">
                  <form onSubmit={HanldeSubmit} className="CancelformContent" autoComplete="off">
                      <input type="text" placeholder="Emp Name" defaultValue={updateData?.empName} name='empName' onChange={handleChange}></input>
                      <input type="text" placeholder="Emp Email" defaultValue={updateData?.empEmail} name='empEmail' onChange={handleChange}></input>
                      <input type="text" placeholder="Emp Age" defaultValue={updateData?.empAge} name='empAge' onChange ={handleChange}></input>
                      <input type="text" placeholder="Emp Field" defaultValue={updateData?.empField} name='empField' onChange={handleChange}></input>
                      <input type='submit'value='Add' className="UpdateFormButton"></input>
                  </form>
  
              </div>
        {/* UPDATE FORM END  */}
      </>
    )
  }