import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Components/Home';
import Notification from './Components/Notification';
import Findjob from './Components/Findjob';
import Logins from './Components/Logins';
import It from './Components/It';
import Bpo from './Components/Bpo';
import Sale from './Components/Sale';
import Customer from './Components/Customer';
import Account from './Components/Account';
import DigitalMarketing from './Components/DigitalMarketing';
import Healthcare from './Components/Healthcare';
import Miscellaneous from './Components/Miscellaneous';
import Manufacturing from './Components/Manufacturing';
import Skin from './Components/Skin';
import Humanresource from './Components/Humanresource';
import Operation from './Components/Operation';
import UploadForm from './Components/UploadForm';
import AdminHome from './Components/AdminHome';
import AdminNavbar from './Components/AdminNavbar';
import AdminLogin from './Components/AdminLogin';
import DisplayJob from './Components/DisplayJob';
import PdfViewer from './Components/PdfViewer';
import ContactPage from './Components/ContactPage';
import Candidates from './Components/Candidates';
import CandidateProfile from './Components/CandidateProfile';


function App() {
    const [userloggedin, setUserloggedin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [authid,setAuthid] = useState(localStorage.getItem('authId'));
    const [adminToken, setAdminToken] = useState(localStorage.getItem('adauthToken'));
    const [admin, setAdmin] = useState(false);
    
    
    return (
        <div>
            {adminToken ? <AdminNavbar adminToken={adminToken} /> : <Navbar userloggedin={userloggedin} token={token} />}
            <Routes>
                <Route path='/' element={adminToken ? <AdminHome /> : <Home setAdmin={setAdmin} />} />
                <Route path='/profile' element={<CandidateProfile/>}/>
                <Route path='/jobdetails/:id/:category' element={<DisplayJob />}/>
                <Route path='/candidates/:jobid' element={<Candidates/>}/>
                <Route path='/logs' element={<Logins setUserloggedin={setUserloggedin} setToken={setToken} />} />
                <Route path='/jobs' element={<Findjob />} />
                <Route path='/contact' element={<ContactPage/>} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/It/:category' element={<It />} />
                <Route path='/Bpo/:category' element={<Bpo />} />
                <Route path='/Sale/:category' element={<Sale />} />
                <Route path='/Cs/:category' element={<Customer />} />
                <Route path='/Account/:category' element={<Account />} />
                <Route path='/Digital/:category' element={<DigitalMarketing />} />
                <Route path='/Health/:category' element={<Healthcare />} />
                <Route path='/Ms/:category' element={<Miscellaneous />} />
                <Route path='/Manufacturing/:category' element={<Manufacturing />} />
                <Route path='/Skin/:category' element={<Skin />} />
                <Route path='/Hr/:category' element={<Humanresource />} />
                <Route path='/Operation/:category' element={<Operation />} />
                <Route path='/forms' element={<UploadForm />} />
                <Route path='/adminlog' element={<AdminLogin setAdminToken={setAdminToken} />} />
                <Route path='/develop' element={<CandidateProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
