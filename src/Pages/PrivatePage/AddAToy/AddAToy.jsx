import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const AddAToy = () => {


    const { user } = useContext(AuthContext);

    const handleAddAToy = event => {
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

        const addAToy = {
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

        console.log(addAToy)

        fetch('http://localhost:5000/addAToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addAToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }


    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <form onSubmit={handleAddAToy} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 px-20 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='toyName' required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name='photo' required className="input input-bordered w-full" />

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
                        <select name="subCategory" className='border py-3 px-2 rounded-lg'>
                            <option value="sports-car">Sports Car</option>
                            <option value="truck">Truck</option>
                            <option value="mini-police-car">Mini Police Car</option>

                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name='price' required className="input input-bordered w-full" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="rating" name='rating' required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" placeholder="available quantity" name='availableQuantity' required className="input input-bordered w-full" />
                    </div>

                </div>
                <div className="form-control px-20">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" placeholder="detail description" name='detailDescription' required className="input py-4  input-bordered w-full" />
                </div>
                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="ADD TOY" className="btn btn-primary" />
                </div>

            </form>

        </div>
    );
};

export default AddAToy;