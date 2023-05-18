import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className=" container lg:container  lg:mx-auto px-10 lg:px-20  ">


                <div className="grid grid-cols-2 lg:grid-cols-4  gap-10 ml-4 justify-between   mx-auto  lg:gap-28 pb-12 text-white ">
                    <div className='col mt-24'>

                        <img className='w-16 rounded-full ms-1 lg:ms-10 mb-3 ' src="https://img.freepik.com/free-vector/detailed-baby-logo-toy-store_23-2148705629.jpg?w=740&t=st=1684342841~exp=1684343441~hmac=9e71efa4faa7a2b389f93548c469be04fea73d017cb93b5bc7a56771f69354ff" />


                        <a className="btn btn-ghost normal-case text-xl font-extrabold">Toy Zone</a>
                        <p className=' mt-3 w-full'>We're here to make playtime extraordinary, because at Toy Zone, play is not just a pastime—it's an adventure!".</p>


                    </div>

                    <div className="col lg:ml-10 lg:mt-24 mt-48 ">
                        <p className="font-bold mb-6">Quick access</p>
                        <p className="mt-4">Home</p>
                        <p className="mt-3 mb-3">All Toys</p>
                        <p>Add A Toy</p>
                        <p className="mt-3 mb-3">My Toys</p>
                        <p>Blog</p>

                    </div>

                    <div className="col mt-24   ">
                        <p className="font-bold  mb-6">Company</p>
                        <p className="mt-4">Why Toy Zone</p>
                        <p className="mt-3 mb-3">About</p>
                        <p>Contact us</p>
                        <p className="mt-3 mb-3">
                            Dhaka-1200
                        </p>

                    </div>

                    <div className="col mt-24  text-white ">
                        <p className="font-bold  mb-6"> Social Media Links</p>
                        <p className="mt-4">Follow us on</p>
                        <div className='mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 '>
                            <FaGoogle />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>


                    </div>





                </div>
                <div className="text-center pb-20 text-white">


                    <h1>© 2023 Toy Zone UIDesign.to - All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;