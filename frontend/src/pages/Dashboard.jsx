import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {

    return <>

        <div className="contaner" style={{ marginTop: '10px', }}>
            <div className="card-body">
                <h1 style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>Services</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '50px', position: 'relative' }}>
                    {/* <button type="button" class="btn btn-outline-success" onClick={e=>{ <Link className="nav-link active" to="createRide"/>}} >Create a ride</button> */}
                    <Link className="nav-link active" to="/createRide"> <button type="button" class="btn btn-outline-success" onClick={e => { <Link className="nav-link active" to="createRide" /> }} >Create a ride</button></Link>
                    <Link className="nav-link active" to="/findRide"> <button type="button" class="btn btn-outline-success" onClick={e => { <Link className="nav-link active" to="findRide" /> }} >Find a ride </button></Link>
                </div>
            </div>
        </div>

    </>




}
