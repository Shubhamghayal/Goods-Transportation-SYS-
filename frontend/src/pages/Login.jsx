import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userLoginAction } from '../redux/authAction'


export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userlogin } = useSelector(state => state.auth)
    const [logindata, setLogindata] = useState({
        email: "",
        password: ''
    })

    const handleLogin = async () => {
        dispatch(userLoginAction(logindata))
        console.log("login");
    }

    useEffect(() => {
        if (userlogin) {
            navigate("/dashboard")
        }
    }, [userlogin])



    return (<>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div>
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={logindata.email}
                                    onChange={e => setLogindata({ ...logindata, email: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={logindata.password}
                                    onChange={e => setLogindata({ ...logindata, password: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>


                            {/* <Link to="/dashboard" > */}
                            <button
                                type="button"
                                onClick={e => handleLogin()}
                                class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            {/* </Link> */}

                            <p class="text-center mt-3">
                                Dont Have Account? <Link to='/register'>Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
