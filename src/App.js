import './App.css';
import io from 'socket.io-client'
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard';
import store from './Redux/Store';
import AuthenticatedRoute from './Components/AuthenticatedRoute';
import '../src/Components/InputStyle/Inputfield.css'
import Nairaacount from './pages/NairaAccount/Nairaacount';
import Transaction from './pages/Transaction/Transaction';
import Receipt from './pages/Transaction/Receipt';
import Accounttransfer from './pages/Accounttransfer/Accounttransfer';
import Confirmtransfer from './pages/Accounttransfer/Confirmtransfer';
import Accountdetails from './pages/Accountdetails/Accountdetails';
import Payment from './pages/Payment/Payment';
import Profile from './pages/Profile/Profile';
import Dialogues from './pages/Dialogues/Dialogues';
import { FiSettings } from 'react-icons/fi';
import Setting from './pages/Profile/Setting';
import Bulktransfer from './pages/BulkTransfer/Bulktransfer';
import Notification from './pages/Notification/Notification';
import Saving from './pages/Saving/Saving';
import Savingdetails from './pages/Saving/Savingdetails';
import Chatpage from './pages/Dialogues/Chatpage';
import Beneficiary from './pages/Beneficiary/Beneficiary';
import Receipts from './pages/Receipt/Receipts';
import Savingtype from './pages/Saving/Savingtype';

const socket = io.connect("https://credio-api.herokuapp.com/chat");

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Routes>
            // FOR PUBLIC
            <Route exact path='/' element={<Login/>}></Route>

            // FOR PRIVATE
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path='/nairaaccount' element={<Nairaacount/>}/>
            <Route path='/transactions' element={<Transaction/>}/>
            <Route path='/receipt/:id' element={<Receipt/>}/>
            <Route path='/transfer' element={<Accounttransfer/>}/>
            <Route path='/confirm' element={<Confirmtransfer/>}/>
            <Route path='/accountdetails' element={<Accountdetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogue' element={<Dialogues socket={socket}/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/bulktransfer' element={<Bulktransfer/>}></Route>
            <Route path='/notification' element={<Notification/>}></Route>
            <Route path='/saving' element={<Saving/>}></Route>
            <Route path='/savingdetails' element={<Savingdetails/>}></Route>
            <Route path='/chat' element={<Chatpage socket={socket}/>}></Route>
            <Route path='/beneficiary' element={<Beneficiary/>}></Route>
            <Route path='/receipts' element={<Receipts/>}></Route>
            <Route path='/savingtype' element={<Savingtype/>}></Route>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
