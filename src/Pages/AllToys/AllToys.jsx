import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {

    useTitle('AllToys')

    const [allToys, setAllToys] = useState([])
    const [toySearch, setToySearch] = useState([])

    useEffect(() => {
        fetch('https://toy-zone-server-ten.vercel.app/alltoy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const handleToSearch = event => {
        event.preventDefault();
        const form = event.target;
        const toySearch = form.search.value;
        console.log(toySearch);

        fetch(`https://toy-zone-server-ten.vercel.app/toySearch/${toySearch}`)
            .then(res => res.json())
            .then(data => setAllToys(data))

    }


    return (
        <div className='container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-20 pb-24 '>
            <h2 className='text-center text-4xl font-bold pb-10'>All Toys: {allToys.length}</h2>


            <form onSubmit={handleToSearch} >
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    <div className="form-control">


                        <input type="text" placeholder="Toy name" name='search' required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control mt-10 px-20 mb-10">
                        <input type="submit" value="Search Toy" className="btn btn-info" />
                    </div>
                </div>

            </form>


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