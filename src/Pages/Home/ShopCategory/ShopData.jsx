import React from 'react';
import { Link } from 'react-router-dom';

const ShopData = ({ sc }) => {



    const { _id, toy_name, photo, sub_category, price, rating, available_quantity, detail_description } = sc;


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl border">
                <figure><img src={photo} alt="Shoes" className='px-10 mx-10 mt-10 ' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{toy_name}</h2>
                    <p className='pt-2 '><span className='font-bold'>Price :</span> {price} </p>
                    <p className='pt-2 pb-4'><span className='font-bold'>Rating :</span> {rating} </p>
                    <div className="card-actions justify-start">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn btn-info ">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopData;