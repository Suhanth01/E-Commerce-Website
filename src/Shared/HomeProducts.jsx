import React from 'react';
import product1 from '../assets/products/brosh.png'
import product2 from '../assets/products/Rectangle 31.png'
import product3 from '../assets/products/Rectangle 34.png'
import product4 from '../assets/products/Rectangle 35.png'
const HomeProducts = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-between items-center border border-gray-800 pb-1 border-x-0 border-t-0'>
                <h1 className='font-bold lg:text-xl text-md'>1406 stores</h1>
                <div className='lg:flex hidden justify-end items-center lg:gap-x-10 gap-x-2'>
                    <p>Relevance</p>
                    <p>Rating</p>
                    <p>Delivery Time</p>
                    <p>Cost: low to high</p>
                    <p>Cost: High to low</p>
                </div>
                <div className='lg:hidden block'>
                    <select>
                        <option>Relevance</option>
                        <option>Rating</option>
                        <option>Delivery Time</option>
                        <option>Cost: low to high</option>
                        <option>Cost: High to low</option>
                    </select>
                </div>
            </div>
            <div className='my-5 bg- grid lg:grid-cols-4 gap-5'>
                <div className='  hover:shadow-lg p-5 flex flex-col justify-center items-center hover:shadow-amber-400 rounded-lg'>
                    <img src={product2} alt="veg" className='' />
                    <p className='text-xl font-semibold'>Carrot</p>
                    <p>1kg</p>
                    <p className='text-lg font-semibold'>30.50/-</p>
                </div>
                <div className='  hover:shadow-lg p-5 flex flex-col justify-center items-center hover:shadow-amber-400 rounded-lg'>
                    <img src={product1} alt="veg" className='' />
                    <p className='text-xl font-semibold'>Brocoli</p>
                    <p>1kg</p>
                    <p className='text-lg font-semibold'>30.50/-</p>
                </div>
                <div className='  hover:shadow-lg p-5 flex flex-col justify-center items-center hover:shadow-amber-400 rounded-lg'>
                    <img src={product4} alt="veg" className='' />
                    <p className='text-xl font-semibold'>Capsicum</p>
                    <p>1kg</p>
                    <p className='text-lg font-semibold'>30.50/-</p>
                </div>
                <div className='  hover:shadow-lg p-5 flex flex-col justify-center items-center hover:shadow-amber-400 rounded-lg'>
                    <img src={product3} alt="veg" className='' />
                    <p className='text-xl font-semibold'>Garlic</p>
                    <p>1kg</p>
                    <p className='text-lg font-semibold'>30.50/-</p>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;