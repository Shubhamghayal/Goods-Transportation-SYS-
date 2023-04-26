import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogoutAction } from './../redux/authSlice'
export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.auth)
    
    
    
    const handleLogout = () => {
        dispatch(LogoutAction())
        navigate("/login")
    }
    

    return <>

        <div className="nav-bar">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand " style={{ fontWeight: "900", color: "whitesmoke" }} href="#">Goods Transportation !</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto ">
                            <li><Link class="nav-link active text-light" to="/">Home</Link></li>


                            {
                                login ? <>
                                    <li> <Link class="nav-link  text-light" to="/dashboard">Services</Link></li>
                                    <div class="dropdown">


                                        <button style={{ backgroundColor: "#a517ba", border: "none" }} class="btn btn-light dropdown-toggle  align-center p-1 m-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                            <i class="bi bi-person-circle text-light"></i>   <span> {login.name}</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><button onClick={e => handleLogout()} class="dropdown-item" href="#">Log Out</button></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>

                                </>

                                    : <>

                                        <li> <Link class="nav-link  text-light" to="/login">Login</Link></li>
                                        <li> <Link class="nav-link  text-light" to="/register">Register</Link></li>


                                    </>
                            }






                        </div>
                    </div>
                </div>
            </nav>
        </div>







    </>


}
