import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateRide from './details/CreateRide';
import FindRide from './details/FindRide';
import Users from './pages/admin/Users';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Register from './pages/Register';

export default function App() {
  return (<>

    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/users' element={<Users></Users>} />
        <Route path='/createRide' element={<CreateRide></CreateRide>} />
        <Route path='/findRide' element={<FindRide></FindRide>} />
      </Routes>
    </BrowserRouter>







  </>

  )
}
