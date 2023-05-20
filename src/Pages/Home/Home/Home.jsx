import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import ShopCategory from '../ShopCategory/ShopCategory';
//import 'react-tabs/style/react-tabs.css';
import { FaStar } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);




    useTitle('Home');



    return (

        <div>
            <section>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-16 lg:container lg:mx-auto px-10 lg:px-20 lg:pt-8 pb-20'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2023/04/14/04/11/fox-7923995_960_720.png" alt="" className='pb-8 pt-2' />
                        </div>
                        <div>
                            <h1 className='text-4xl lg:text-5xl font-semibold text-black'>Unlock Adventure <br /> and Wonder at<br /> <span className='text-indigo-600'> Toy Zone!</span></h1>
                            <p className='pt-6 lg:pt-6 pb-6'>Kids car toys are specially designed toys that mimic real vehicles and are specifically created for children's play and entertainment. Kids car toys can provide learning opportunities as well. They can introduce children to basic concepts such as colors, numbers, and shapes. They can also foster creativity, problem-solving, and critical thinking as children engage in imaginative play scenarios.</p>
                            <div className='pb-4'>
                                <a className="btn btn-info text-white ">Get Started</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-4 mb-2'>
                    <h1 className=' text-center text-4xl lg:text-5xl font-semibold text-black'> Toy Zone Gallery  </h1>
                    <p className='text-center pt-6 px-6'>Toy Zone Gallery is a haven for toy lovers, offering a captivating space to immerse oneself in the world of toys, <br /> relive cherished memories, discover new favorites, and connect with fellow enthusiasts.</p>

                </div>
            </section>

            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-6 pb-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 pt-8  mb-6 px-20'>

                        <div>
                            <img src="https://img.freepik.com/free-photo/young-boy-playing-indoors-with-eco-toys_23-2150268110.jpg?w=740&t=st=1684394713~exp=1684395313~hmac=e60c0bd34820e92d88b6b84432badcaa87d0f5eaa40856d0d54ce8be5c6afab2" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/yellow-toy-truck-yard_181624-28412.jpg?w=740&t=st=1684394964~exp=1684395564~hmac=78f47a07c22cf3b9b9bdbc7d25dc786035419c42fdc66506ef1660f3dc4ff11f" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382708.jpg?w=740&t=st=1684389861~exp=1684390461~hmac=b086fbe0539098c6d3467aec6d60e9a1cccc473cff6045c7b28e37741a8564f9" alt="" />
                        </div>


                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6  mb-6 px-20'>

                        <div>
                            <img src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?w=740&t=st=1684395133~exp=1684395733~hmac=6d3bd9793bfe9e31bf1626e7887b400d4ddf54582ff9c081d8fc44778785dfd2" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684395167~exp=1684395767~hmac=735393f05d30ce4f70e9acbfb7f2ca8c824350b734afc65d7c0e99926ed046bd" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/closeup-orange-wooden-toy-car-tracks-lights_181624-23893.jpg?w=740&t=st=1684395253~exp=1684395853~hmac=50aed2d5bb284a82c572124a848983ac4999c9af832034bebf63369df61cfd12" alt="" />
                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16350.jpg?w=740&t=st=1684395408~exp=1684396008~hmac=f842bbc44e5ec494a9f28091a0afd05121aab803bac598f75318d1168c659741" alt="" />
                        </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6  mb-6 px-20'>

                        <div>
                            <img src="https://img.freepik.com/free-photo/car-germany-map-with-pinpoint-line_23-2148232482.jpg?w=740&t=st=1684395581~exp=1684396181~hmac=ea62af1b8e80528939769fa92ab45af6843f5044c80a9b16f5865e9955e213d3" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?w=740&t=st=1684395619~exp=1684396219~hmac=3f986f549616a17d6465cd4117e842989164ff03e5b88942c0cf6b0edf179f60" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/christmas-travel-concept-with-car_23-2149575576.jpg?w=740&t=st=1684395804~exp=1684396404~hmac=e967a054a7ab6acd1f2710cd683b93979b704068a71078cb8ff618fbf62db472" alt="" />
                        </div>


                    </div>

                </div>
            </section>

            <section className=' bg-slate-100'>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-4 '>
                    <h1 className=' pt-12 text-center text-4xl lg:text-5xl font-semibold text-black'> Toys Category  </h1>
                    <p className='text-center pt-6 px-6 pb-4'>Shopping now at Toy Zone allows you to explore a wide variety of toys, shop conveniently from  the comfort <br /> of your home, and provide children with
                        engaging and enjoyable play experiences. </p>

                </div>
            </section>

            <section className=' bg-slate-100'>
                <ShopCategory></ShopCategory>

            </section>

            <section >
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-4 '>
                    <h1 className=' pt-12 text-center text-4xl lg:text-5xl font-semibold text-black'> Our Client Review  </h1>
                    <p className='text-center pt-6 px-6 pb-4'>Delighted Customer Shares Their Fantastic Experience with Toy Zone: A True Toy Wonderland! </p>

                </div>
            </section>

            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>

                        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="card w-full bg-base-100 shadow  ">
                                <figure><img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=740&t=st=1684504982~exp=1684505582~hmac=a97df4de954cacb5a6e6718f73fb48df045c4d27f0a573af5d16e29fa1579062" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                    <p className='pt-3'>I recently had the pleasure of shopping at Toy Zone, and I am thrilled to share my exceptional experience with fellow toy enthusiasts. From the moment I entered their store.</p>

                                    <div className="card-actions justify-start text-orange-400 pt-5">
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card w-full bg-base-100 shadow">
                            <figure><img src="https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131033.jpg?w=740&t=st=1684506204~exp=1684506804~hmac=37c28db666ed02802c045b5761ca0c511a23072b47dc1ed69865ebab3f2c06d6" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl"></h2>
                                <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                <p className='pt-3'>The selection of toys at Toy Zone is simply unparalleled. They have carefully curated a diverse collection that caters to various ages, interests, and developmental stages. </p>

                                <div className="card-actions justify-start text-orange-400 pt-5">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full bg-base-100 shadow">
                            <figure><img src="https://img.freepik.com/free-photo/side-view-little-kid-playing-with-car_23-2149307029.jpg?w=740&t=st=1684506130~exp=1684506730~hmac=318ae611d4e1b14a2d95a1472f8bec3be1c6a203f4b2aa71c0056e29b78383ad" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                <p className='pt-3'>The staff at Toy Zone deserves special commendation. Their knowledge, enthusiasm, and genuine love for toys were evident in every interaction. </p>

                                <div className="card-actions justify-start text-orange-400 pt-5">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>









                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;