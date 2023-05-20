import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ShopData from './ShopData';
import useTitle from '../../../hooks/useTitle';

const ShopCategory = () => {

    const [subCategorys, setSubCategorys] = useState('sports-car')

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/data/${subCategorys}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [subCategorys])





    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-20 '>
            <Tabs className=''>
                <TabList className='flex flex-col  md:flex-row gap-5  justify-between   lg:px-48 px-8 py-8'>
                    <Tab>
                        <button
                            onClick={() => setSubCategorys('sports-car')}
                            className="btn btn-info text-white">Sports Car</button>
                    </Tab>
                    <Tab>
                        <button
                            onClick={() => setSubCategorys('truck')}
                            className="btn btn-info text-white"> Truck</button>
                    </Tab>
                    <Tab>
                        <button
                            onClick={() => setSubCategorys('mini-police-car')}
                            className="btn btn-info text-white">  Mini Police Car</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pt-5 lg:px-20 px-10 '>
                        {
                            data.map(sc => <ShopData
                                key={sc._id}
                                sc={sc}
                            ></ShopData>)
                        }

                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pt-5 lg:px-20 px-10 '>
                        {
                            data.map(sc => <ShopData
                                key={sc._id}
                                sc={sc}
                            ></ShopData>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pt-5 lg:px-20  px-10'>
                        {
                            data.map(sc => <ShopData
                                key={sc._id}
                                sc={sc}
                            ></ShopData>)
                        }

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;