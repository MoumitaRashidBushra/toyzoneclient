import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { githubLogin, googleLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleToLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleToGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>

            <div className=' mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                <form onSubmit={handleToLogin} >
                    <div className="card  w-full max-w-sm shadow bg-base-100">
                        <div className="card-body">
                            <h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center"> Please Login Now!!!</h1>

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

                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p className='font-bold'>Don't Have an Account?<button className="btn btn-outline  ms-2"><Link to='/register'>Register</Link></button> </p>
                            <div className="divider px-3">OR</div>

                            <button onClick={handleToGoogleLogin} className="btn btn-outline  mt-3 mb-6"><FaGoogle className='mr-2' /> Login wth Google</button> <br />

                        </div>
                    </div>

                </form>

            </div>




        </div>
    );
};

export default Login;