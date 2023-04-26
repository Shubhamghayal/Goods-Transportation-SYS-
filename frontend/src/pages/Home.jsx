import React from 'react'
import { Link } from 'react-router-dom';
import wave1 from './wave1.png';
export default function Home() {

    return (<>
        <div className="section-banner" id='banner' >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className='p-title' >Lets  have
                            Courier pooling !</p>
                        <h3>Your pick of rides at low prices</h3>
                        <Link to="/register" >
                            <button type="button" class="btn btn-light m-4     ">Get Started</button>
                        </Link>


                    </div>
                    <div className="col-md-6 text-center">
                        <img src={"https://img.freepik.com/free-vector/car-driving-concept-illustration_114360-8091.jpg?size=338&ext=jpg&ga=GA1.2.955795821.1671785414&semt=sph"} alt="" className='img-fluid' srcset="" />
                    </div>
                </div>
            </div>
            <img src={wave1} className='bottom-img' alt="" srcset="" />
        </div>


    </>

    )
}
