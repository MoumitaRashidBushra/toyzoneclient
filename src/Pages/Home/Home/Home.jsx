import React from 'react';

const Home = () => {
    return (
        <section>
            <div className=' bg-slate-100 mb-14'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-16 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-8 pb-20'>
                    <div>
                        <img src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-77962.jpg?w=826&t=st=1684389722~exp=1684390322~hmac=d1cee48babe33225ef2479d05c52d17f207fdea273c52db4cb15c441fdd9a525" alt="" className='pb-8 pt-2' />
                    </div>
                    <div>
                        <h1 className='text-4xl lg:text-6xl font-semibold text-black'>Unlock Adventure <br /> and Wonder at<br /> <span className='text-indigo-600'> Toy Zone!</span></h1>
                        <p className='pt-6 lg:pt-6 pb-6'>Kids car toys are specially designed toys that mimic real vehicles and are specifically created for children's play and entertainment. Kids car toys can provide learning opportunities as well. They can introduce children to basic concepts such as colors, numbers, and shapes. They can also foster creativity, problem-solving, and critical thinking as children engage in imaginative play scenarios.</p>
                        <div className='pb-4'>
                            <a className="btn btn-info text-white ">Get Started</a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Home;