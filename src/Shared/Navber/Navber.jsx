import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {


    const { user, logout } = useContext(AuthContext);

    const handleToLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));

    }


    return (
        <div>
            <div className=' bg-slate-100'>
                <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
                    <div className='flex'>
                        <img className='w-16 rounded-full' src="https://img.freepik.com/free-vector/detailed-baby-logo-toy-store_23-2148705629.jpg?w=740&t=st=1684342841~exp=1684343441~hmac=9e71efa4faa7a2b389f93548c469be04fea73d017cb93b5bc7a56771f69354ff" />
                        <a className="btn btn-ghost normal-case text-2xl font-extrabold">Toy Zone</a>
                    </div>

                    <div className='mx-2' >
                        {/* <ActiveLink to='/' className='mx-5'>Home</ActiveLink >
                        <ActiveLink to='blog' className='mx-5'>Blog</ActiveLink> */}
                        <Link to='/' className='mx-2 lg:mx-4'>Home</Link >
                        <Link to='allToys' className='mx-2 lg:mx-4'>All Toys</Link>
                        {
                            user ?
                                <>
                                    <Link to='addAToy' className='mx-2 lg:mx-4'>Add A Toy</Link>
                                    <Link to='myToys' className='mx-2 lg:mx-4'>My Toys</Link>

                                </>
                                :

                                ""
                        }
                        <Link to='blog' className='mx-2 lg:mx-4'>Blog</Link>


                    </div>

                    <div className='flex justify-between items-center flex-col  md:flex-row gap-4'>
                        {
                            user && <div className="tooltip" data-tip={user?.displayName}>
                                <img className='w-16 rounded-full' src={user?.photoURL} />
                            </div>
                        }

                        <div>

                            {
                                user ?
                                    <>

                                        <Link onClick={handleToLogout} className='btn btn-info px-3 text-white'>Logout</Link >
                                    </>
                                    :

                                    <Link to='/login' className='btn btn-info px-3 text-white'>Login</Link >
                            }
                        </div>




                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;