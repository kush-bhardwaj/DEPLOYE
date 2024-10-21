import '../Dashboard.css'
import FormCancle from './UpdateForm';
import { MdCancel } from "react-icons/md";
import { Container, Modal, Table, Button } from "react-bootstrap";
import { IoMdEye } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DeleteApi, GetAllImagesApi, UpdateEmpApi } from "../../../API/Api";
import { useState } from 'react';
import UpdateForm from './UpdateForm';
import { ShowEmployeDetail } from './ShowDetails';

const ManageData = (props) => {
  //Update form //
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show, setShow] = useState(false);
  const [empId, setEmpId] = useState();
  const [updateData, setUpdateData] = useState({});
  const [showEmpData, setShowEmpData] = useState({})
  const [allImages, setAllimages] = useState({})

  // Delete  Details
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setEmpId(id)
  };


  // Update Details
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (empData) => {
    setShow1(true)
    setUpdateData({ ...updateData, ...empData })
  };


  //Show Details
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (empData) => {
    setShow2(true)
    setShowEmpData({ ...showEmpData, ...empData })
  }
  async function dataDelte() {
    const res = await DeleteApi(empId)
    if (res.status === "success") {
    }
    handleClose();
  }



  // Update Api Calling
  // async function UpdateForm(){
  //   const UpdateRes = await UpdateEmpApi()
  // }
  return (
    <>
      <Container className="ManageConatiner p-2" >
        <Table striped bordered hover text-center variant="">
          <thead>
            <tr>

              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Product</th>
              <th>View</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {props.listEmployee.map((e, pos) =>

              <tr key={pos}>
                <td>{e.empName}</td>
                <td>-</td>
                <td>{e.empEmail}</td>
                <td>{e.empField}</td>
                <td>{e.empAge}</td>
                <td><img src={e.imagePath}></img></td>
                <td><IoMdEye style={{ color: "skyblue", textAlign: "center", fontSize: "20px", marginRight: "5px", width: "30px", padding: "0px", cursor: "pointer" }} onClick={() => handleShow2(e)} />
                </td>

                <td>
                  <FaRegEdit style={{ cursor: "pointer", color: "orange", textAlign: "center", fontSize: "20px", marginRight: "5px", wdthwidth: "30px", padding: "0px" }} onClick={() => handleShow1(e)} />
                </td>

                <td>
                  <MdDelete style={{ cursor: "pointer", color: "red", textAlign: "center", fontSize: "20px", marginRight: "5px", width: "30px", padding: "0px" }} onClick={() => handleShow(e._id)} /></td>

              </tr>
            )}



          </tbody>
        </Table>

      </Container>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete ?</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={dataDelte}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Update Form */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm updateData={updateData} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">
            Cancel
          </Button>
          <Button variant="primary">
            Ok
          </Button>
        </Modal.Footer> */}
      </Modal>


      {/* Show Details */}


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowEmployeDetail ShowData={showEmpData} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">
            Cancel
          </Button>
          <Button variant="primary">
            Ok
          </Button>
        </Modal.Footer> */}
      </Modal>

    </>

  )
}

export default ManageData;