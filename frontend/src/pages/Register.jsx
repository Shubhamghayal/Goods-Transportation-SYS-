import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { registerUser } from '../redux/authAction';

export default function Register() {
    const dispatch = useDispatch()
    const [inp, setInp] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = async () => {
        dispatch(registerUser(inp))
    }


    return (<>
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={inp.name}
                                    onChange={e => setInp({ ...inp, name: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={inp.email}
                                    onChange={e => setInp({ ...inp, email: e.target.value })}
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={inp.password}
                                    onChange={e => setInp({ ...inp, password: e.target.value })}
                                
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a password.</div>
                            </div>
                            {/* <div class="mt-2">
                                <label for="cpassword" class="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div> */}
                            <button type="button" class="btn btn-primary w-100 mt-3"
                                onClick={e => handleSubmit()}
                            >
                                Signup
                            </button>
                            <p class="text-center mt-3">
                                Already Have Account? <Link to='/login'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
