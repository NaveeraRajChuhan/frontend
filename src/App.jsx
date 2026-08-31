import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./dashboard";

function App() {

  return (
    <>
    <div className='App'>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>

    </div>
       {/* <Dashboard />; */}
    </>
  )
}

export default App





// naveera
// import Dashboard from "./dashboard";

// function App() {
//   return <Dashboard />;
// }

