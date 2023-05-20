import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ShopData = ({ sc }) => {



    const { _id, toy_name, photo, sub_category, price, rating, available_quantity, detail_description } = sc;


    return (
        <div>
            <div
                className="card w-full bg-base-100 shadow-xl border ">
                <figure><img src={photo} alt="Shoes" className='px-5 mx-5 mt-5 ' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{toy_name}</h2>
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