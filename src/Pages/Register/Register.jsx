import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleToRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {

            setError('Please add 9 characters at least one uppercase letter, one lowercase letter, and one number or special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                updateUser(createdUser, name, photo)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })






    }



    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>

            <div className=' mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                <form onSubmit={handleToRegister} >
                    <div className="card  w-full max-w-sm shadow bg-base-100">
                        <div className="card-body">
                            <h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center"> Please Register Now!!!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />

                                <p className='text-red-500'>{error}</p>

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p className='font-bold mb-6'>Don't Have an Account?<button className="btn btn-outline  ms-2"><Link to='/login'>Login</Link></button> </p>




                        </div>
                    </div>

                </form>

            </div>




        </div>
    );
};

export default Register;