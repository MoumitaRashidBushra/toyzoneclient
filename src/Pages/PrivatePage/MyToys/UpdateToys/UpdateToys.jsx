import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Provider/AuthProvider';

const UpdateToys = () => {

    const updateToys = useLoaderData();
    const { _id, toy_name, photo, sub_category, price, rating, available_quantity, detail_description } = updateToys;



    const { user } = useContext(AuthContext);

    const handleUpdateAToy = event => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toyName.value;
        const photo = form.photo.value;
        const name = user?.displayName;
        const email = user?.email;
        const sub_category = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.availableQuantity.value;
        const detail_description = form.detailDescription.value;

        const updateAToy = {
            toy_name,
            photo,
            name,
            email,
            sub_category,
            price,
            rating,
            available_quantity,
            detail_description
        };

        console.log(updateAToy)

        fetch(`http://localhost:5000/addAToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h1 className='text-center text-4xl font-bold'>Updated Toys: {toy_name}</h1>
            <form onSubmit={handleUpdateAToy} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 px-20 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='toyName' defaultValue={toy_name} required readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name='photo' defaultValue={photo} required readOnly className="input input-bordered w-full" />

                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" placeholder="seller name" name='name' defaultValue={user?.displayName} readOnly required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={user?.email} readOnly required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="subCategory" defaultValue={sub_category} className='border py-3 px-2 rounded-lg' >
                            <option value="sports-car">Sports Car</option>
                            <option value="truck">Truck</option>
                            <option value="mini-police-car">Mini Police Car</option>

                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name='price' defaultValue={price} required className="input input-bordered w-full" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="rating" name='rating' defaultValue={rating} readOnly required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" placeholder="available quantity" name='availableQuantity' defaultValue={available_quantity} required className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="form-control px-20">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" placeholder="detail description" name='detailDescription' defaultValue={detail_description} required className="input py-4  input-bordered w-full" />
                </div>
                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="UPDATED TOY" className="btn btn-primary" />
                </div>

            </form>

        </div>
    );
};

export default UpdateToys;