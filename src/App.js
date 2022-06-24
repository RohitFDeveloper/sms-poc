// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/student/register";
import Login from "./pages/student/login";
import List from "./pages/student/list";
import Dashboard from "./pages/student/dashboard"
import Home from './pages/home';

function App() {
  return (
    <div style={{position:"relative", height: "100vh", width: "100vw"}}>
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
              <Route path="student">
                <Route exact path="register" element={<Register />}></Route>
                <Route exact path="login" element={<Login />}></Route>
                <Route exact path="list" element={<List />}></Route>
                <Route exact path="dashboard" element={<Dashboard />}></Route>
              </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
