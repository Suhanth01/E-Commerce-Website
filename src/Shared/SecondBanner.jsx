import React from 'react';
import bg from '../assets/bg/Vector 7.png'
import image1 from '../assets/service/image 80.png'
import image2 from '../assets/service/image 81 (1).png'
import image3 from '../assets/service/image 81.png'
const SecondBanner = () => {
    return (
        <div style={{ background: `url(${bg})` }}>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 mt-16 mb-10 w-11/12 mx-auto' >
                <div className=' flex justify-center items-center flex-col text-center'>
                    <img src={image1} alt="" className='w-72 h-72' />
                    <p className='font-semibold w-3/4 pb-3'>No Minimum Order
                        Order in for yourself or for the group, with no restrictions on order value
                    </p>
                </div>
                <div className=' flex justify-center items-center flex-col text-center'>
                    <img src={image2} alt="" className='w-72 h-72' />
                    <p className='font-semibold w-3/4 pb-3'>Live Order Tracking
                        Know where your order is at all times, from the restaurant to your doorstep
                    </p>
                </div>
                <div className=' flex justify-center items-center flex-col text-center'>
                    <img src={image3} alt="" className='w-72 h-72' />
                    <p className='font-semibold w-3/4 pb-3'>Lightning-Fast Delivery
                        Experience Bee2Bee's superfast delivery for food delivered fresh & on time
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;