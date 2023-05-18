import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className=' bg-slate-100'>
                <div className='flex justify-between items-center flex-col  md:flex-row  lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
                    <div className='flex'>
                        <img className='w-16 rounded-full' src="https://img.freepik.com/free-vector/detailed-baby-logo-toy-store_23-2148705629.jpg?w=740&t=st=1684342841~exp=1684343441~hmac=9e71efa4faa7a2b389f93548c469be04fea73d017cb93b5bc7a56771f69354ff" />
                        <a className="btn btn-ghost normal-case text-2xl font-extrabold">Toy Zone</a>
                    </div>

                    <div className='mx-2' >
                        {/* <ActiveLink to='/' className='mx-5'>Home</ActiveLink >
                        <ActiveLink to='blog' className='mx-5'>Blog</ActiveLink> */}
                        <Link to='/' className='mx-4'>Home</Link >
                        <Link to='allToys' className='mx-4'>All Toys</Link>
                        <Link to='addAToy' className='mx-4'>Add A Toy</Link>
                        <Link to='addAToy' className='mx-4'>My Toys</Link>
                        <Link to='blog' className='mx-4'>Blog</Link>


                    </div>

                    <div className='flex justify-between items-center flex-col  md:flex-row gap-4'>
                        {/* {
                            user && <div className="tooltip" data-tip={user?.displayName}>
                                <img className='w-16 rounded-full' src={user?.photoURL} />
                            </div>
                        }

                        <div>

                            {
                                user ?
                                    <Link onClick={handleLogout} className='btn btn-info px-3 text-white'>Logout</Link >
                                    :

                                    <Link to='/login' className='btn btn-info px-3 text-white'>Login</Link >
                            }
                        </div> */}

                        <img className='w-16 rounded-full' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1684349161~exp=1684349761~hmac=d195e9ac334a0fe8d12ee883b67eae7edba2714caabff82b3ecf30fd8746a9d3" />
                        <Link to='/login' className='btn btn-info px-3 text-white'>Login</Link >


                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;