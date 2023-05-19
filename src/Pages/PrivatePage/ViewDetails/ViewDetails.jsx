import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const viewAll = useLoaderData();
    const { _id, toy_name, photo, sub_category, price, rating, available_quantity, detail_description, name, email, } = viewAll;

    return (
        <div className='container lg:container lg:mx-auto px-10 lg:px-20 lg:pt-8 pb-6 '>
            <h1 className='text-center text-5xl font-bold pb-10 pt-10'>{toy_name}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-16  pb-20'>

                <div>

                    <p className='pt-6 lg:pt-6 pb-6 text-justify'><span className=' font-bold'>Detail Description :</span>  {detail_description}</p>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Seller Name : </span>  {name}</h1>
                    </div>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Seller Email : </span>  {email}</h1>
                    </div>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Sub Category : </span>  {sub_category}</h1>
                    </div>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Rating : </span>  {rating}</h1>
                    </div>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Price : </span> {price}</h1>
                    </div>
                    <div className='pb-4'>
                        <h1 ><span className=' font-bold'>Available Quantity : </span> {available_quantity}</h1>
                    </div>
                </div>

                <div>
                    <img src={photo} alt="" className='pb-8 pt-2' />
                </div>


            </div>
        </div>
    );
};

export default ViewDetails;