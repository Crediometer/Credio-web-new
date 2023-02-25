import './App.css';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard';
import store from './Redux/Store';
import AuthenticatedRoute from './Components/AuthenticatedRoute';
import '../src/Components/InputStyle/Inputfield.css'
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
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
