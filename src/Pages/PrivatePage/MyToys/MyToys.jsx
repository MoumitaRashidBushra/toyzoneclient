import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysRow from './MyToysRow/MyToysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/addAToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-20 pb-20 '>

            <h2 className='text-center text-3xl font-semibold pb-6'>My total toys:{myToys.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th> Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {/* <tr>

                            <td>
                                <div className=" w-24 h-24">
                                    <img src="https://img.freepik.com/free-vector/boy-driving-mini-car-toy-white-background_1308-76150.jpg?w=740&t=st=1684421705~exp=1684422305~hmac=5c6b53bf2157fe28e4ac142295a5a73df0255f9e9fe4d97f4fd5d6a96018b6a2" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td>
                                Yellow Truck
                            </td>
                            <td>
                                truck
                            </td>
                            <td>30</td>
                            <td>4.5</td>

                            <td>230</td>


                            <th>
                                <button className="btn btn-ghost btn-xs">Update</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr> */}

                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;