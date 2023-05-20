import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysRow from './MyToysRow/MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys')

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);

    const [selectedOption, setSelectedOption] = useState('asen');

    useEffect(() => {
        fetch(`https://toy-zone-server-ten.vercel.app/addAToys?email=${user.email}&sort=${selectedOption}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user, selectedOption])


    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-zone-server-ten.vercel.app/addAToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-20 pb-20 '>

            <h2 className='text-center text-4xl font-bold pt-8 pb-12'>My total toys: {myToys.length}</h2>

            <div className='pb-8 flex flex-col lg:flex-row items-center justify-center'>
                <label className="label ">
                    <span className="label-text  text-center">Sort by:</span>
                </label>
                <select
                    onChange={(event) => setSelectedOption(event.target.value)}
                    name="sort" className='border py-3 px-2 rounded-lg'>

                    <option value={'asen'}>Price (Low to High)</option>
                    <option value={'dese'}>Price (High to Low)</option>


                </select>
            </div>

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


                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}

                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;