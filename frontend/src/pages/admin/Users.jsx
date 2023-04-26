import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/authAction'

export default function Users() {
    const { users } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    return (<>
        {/* <h1>{JSON.stringify(users)}</h1> */}

        <div className="container mt-5 ">
            <table class="table table-light table-striped table-hover">
                <thead className='bg-dark' >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>

                        </tr>
                    )}


                </tbody>
            </table>
        </div>














    </>

    )
}
