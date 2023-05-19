import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    return (
        <div className='container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-20 pb-24 '>
            <h2 className='text-center text-4xl font-bold pb-16'>All Toys: {allToys.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>

                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(allToy => <AllToysRow
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToysRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;