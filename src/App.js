// import logo from './logo.svg';
import './App.css';
import SingUp from './Component/Form/SingUp';
// import header from '../src/Component/Header/Header';
import Login from './Component/Form/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import { BrowserRouter   as Router, Route,Routes} from 'react-router-dom';
import AddData from './Component/Dashboard/ManageEmploye/AddData';
import { ShowEmployeDetail } from './Component/Dashboard/ManageEmploye/ShowDetails';
import UploadFile from './Component/Dashboard/ManageEmploye/UploadFile';
import Courses from './Component/course/Courses';
import PdfGenerator from './Component/course/GenretePDF';



function App() {
  return (

  //  <Header/>
    <Router>
      <Routes>
        {/* <Route path='' element={<Courses />}></Route> */}
        {/* <Route path='' element={<PdfGenerator />}></Route> */}
        <Route path='' element={<SingUp />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='showdetails' element={<ShowEmployeDetail />}></Route>
        <Route path='upload' element={<UploadFile />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
