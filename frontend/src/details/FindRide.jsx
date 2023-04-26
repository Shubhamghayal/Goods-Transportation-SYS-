import React, { useState } from 'react'

export default function FindRide() {
  const [findRide, setfindRide] = useState({
    from: "",
    destination: '',
    date: ''
  })
  return <>
    <div class="container" style={{ margin: '60px' }}>
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <div class="card-header">Find Ride</div>
            <div class="card-body">
              <div>
                {/* <label for="task" class="form-label">From</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="task"
                  placeholder="From"
                  value={findRide.from}
                  onChange={e => setfindRide({ ...FindRide, from: e.target.value })}
                />

              </div>
              <div class="mt-2">
                {/* <label for="desc" class="form-label">To</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="desc"
                  placeholder="Destination"
                  value={findRide.destination}
                  onChange={e => setfindRide({ ...FindRide, destination: e.target.value })}

                />

              </div>
              <div class="mt-2">
                {/* <label for="desc" class="form-label">To</label> */}
                <input
                  type="date"
                  class="form-control"
                  id="desc"
                  placeholder="Date"
                  value={findRide.date}
                  onChange={e => setfindRide({ ...FindRide, date: e.target.value })}

                />
                <br />
                <button type="button" class="btn btn-outline-primary w-100 mt-3" >Find </button>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>






  </>
}
