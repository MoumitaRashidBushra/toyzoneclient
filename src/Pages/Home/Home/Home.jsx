import React from 'react';

const Home = () => {
    return (

        <div>
            <section>
                <div className=' bg-slate-100 mb-14'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-16 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-8 pb-20'>
                        <div>
                            <img src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-77962.jpg?w=826&t=st=1684389722~exp=1684390322~hmac=d1cee48babe33225ef2479d05c52d17f207fdea273c52db4cb15c441fdd9a525" alt="" className='pb-8 pt-2' />
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
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6  mb-24 px-20'>

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
        </div>

    );
};

export default Home;