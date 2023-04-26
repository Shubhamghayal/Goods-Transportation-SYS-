import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateRide() {
  const [modal, setModal] = useState(false)
  const [Ride, setRide] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    name: "",
    age: "",
    drlicense: "",
    adharid: "",
    vehicleName: "",
    vehicleType: "",
  })
  console.log();
  return <>
    <div class="container" style={{ margin: '60px' }}>
      <div class="row">

        <div class="col-sm-4 offset-sm-2">
          <div class="card">
            <div class="card-header">Create a Ride</div>
            <div class="card-body">
              <div>
                <label for="task" class="form-label">Source</label>
                <input
                  type="text"
                  class="form-control"
                  id="Source"
                  placeholder="Leaving from"
                  value={Ride.source}
                  onChange={e => setRide({ ...Ride, source: e.target.value })}
                />

              </div>
              <div class="mt-2">
                <label for="desc" class="form-label">Destination</label>
                <input
                  type="text"
                  class="form-control"
                  id="destination"
                  placeholder="Going To"
                  value={Ride.destination}
                  onChange={e => setRide({ ...Ride, destination: e.target.value })}

                />

              </div>
              <div class="mt-2">
                <label for="desc" class="form-label">Please Enter Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  placeholder="Date"
                  value={Ride.date}
                  onChange={e => setRide({ ...Ride, date: e.target.value })}

                />
              </div>

              <div class="mt-2">
                <label for="desc" class="form-label">Pease enter time when You Leave </label>
                <input
                  type="time"
                  class="form-control"
                  id='time'
                  placeholder="Time of Leaving"
                  value={Ride.time}
                  onChange={e => setRide({ ...Ride, time: e.target.value })}

                />
              </div>


              <button
                onClick={e => setModal(true)}
                type="button" class="btn btn-primary w-100 mt-3" >Create Ride</button>



            </div>
          </div>
        </div>

        {
          modal && <>
            <div className="col-sm-4 offset-sm-2">
              <div className="card">
                <div className="card-header">Vehicle And Driver Detalis</div>
                <div className="card-body">
                  <div>
                    {/* <label for="task" className="form-label"></label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      placeholder="Enter Your Name"
                      value={Ride.name}
                      onChange={e => setRide({ ...Ride, name: e.target.value })}
                    />
                  </div>
                  <div className="mt-2">
                    {/* <label for="task" className="form-label"></label> */}
                    <input
                      type="number"
                      className="form-control"
                      id="task"
                      placeholder="Enter Your Age"
                      value={Ride.age}
                      onChange={e => setRide({ ...Ride, age: e.target.value })}

                    />
                  </div>
                  <div className="mt-2">
                    {/* <label for="task" className="form-label"></label> */}
                    <input
                      type="number"
                      className="form-control"
                      id="task"
                      placeholder="Driving License Number"
                      value={Ride.drlicense}
                      onChange={e => setRide({ ...Ride, drlicense: e.target.value })}

                    />
                  </div>
                  <div className="mt-2">
                    {/* <label for="task" className="form-label"></label> */}
                    <input
                      type="number"
                      className="form-control"
                      id="task"
                      placeholder="Aadhar Card Number"
                      value={Ride.adharid}
                      onChange={e => setRide({ ...Ride, adharid: e.target.value })}

                    />
                  </div>

                  <div className="mt-2">
                    {/* <label for="desc" className="form-label">Description</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder="Vehicle Name"
                      value={Ride.vehicleName}
                      onChange={e => setRide({ ...Ride, vehicleName: e.target.value })}

                    />
                  </div>
                  <div className="mt-2">
                    {/* <label for="desc" className="form-label">Description</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder=" Vehicle Number"
                      value={Ride.vehicleType}
                      onChange={e => setRide({ ...Ride, vehicleType: e.target.value })}

                    />
                  </div>

                  {/* <Link to='/'> */}
                  <button type="button" className="btn btn-primary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Details
                  </button>
                  {/* </Link> */}
                </div>
              </div>

            </div>

          </>
        }


      </div>
    </div>
    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button> */}

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to save the changes?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>
    </div>
    {/* {
                JSON.stringify(Ride)
               } */}



  </>
}
