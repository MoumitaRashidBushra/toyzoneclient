import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className=' lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
            <div className='text-center  '>

                <p>{error.message}</p>
                <img className="w-96 mx-auto mt-5 mb-5 rounded-xl" src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?size=626&ext=jpg&ga=GA1.1.153242055.1684342499&semt=ais" alt="" />

                <Link to='/' className='btn btn-error px-3 text-white'>Back to home</Link >

            </div>

        </div>
    );
};

export default ErrorPage;