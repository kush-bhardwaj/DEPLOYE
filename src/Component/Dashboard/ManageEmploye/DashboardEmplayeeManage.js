
import '../Dashboard.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosAddCircle } from "react-icons/io";
import AddData from './AddData';
import { useState,memo } from 'react';
// import { memo } from 'react';
export default memo( function DashboardEmployeManage(props) {
  const [isEmpForm,isSetEmpForm] = useState();
  function cancelAddForm(){
    isSetEmpForm(false)
  }
  return (
    <>
      <Container className='mt-3 bg-color '>
        <Navbar expand="lg" className='text-light'>
          <Container>
            <Navbar.Brand href="#" className='text-white font-bold'>Manage Employees</Navbar.Brand>
            <button type="button" className='button' >Total Employee ({props.listEmployee.length??0})</button>
          
            <button type="button" className='button' onClick={ ()=>isSetEmpForm(true)}><IoIosAddCircle className='addIcon'  />Add</button>
          
          </Container>
        </Navbar>
      </Container>
      <Container >
          {isEmpForm ? <AddData fun={cancelAddForm}/>:null}
      </Container>
    </>
  )
}
)