import './App.css';
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
            <Route path='/receipt' element={<Receipt/>}/>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
