import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import AddStudent from './Component/DashBoard/AddStudent'
import StudentList from './Component/DashBoard/Student_List/StudentList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />}>
    //       <Route path="SignUp" element={<SignUp />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/View" element={<StudentList />} />

      
      </Routes>
    </Router>
  );
}

export default App;
