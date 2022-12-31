import React from 'react';
import { BiSearch } from 'react-icons/bi';
import product1 from '../assets/products/brosh.png'
import product2 from '../assets/products/Rectangle 31.png'
import product3 from '../assets/products/Rectangle 34.png'
import product4 from '../assets/products/Rectangle 35.png'
import bg from '../assets/bg/Vector 8.png'
const Search = () => {
    return (
        <div style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '', backgroundPosition: 'top' }} className='min-h-screen w-full'>
            <div className='flex justify-center items-center relative'>
                <input type="text" placeholder='Search for items or store' className='py-4 px-5 rounded-lg bg-gray-50 w-4/6 mx-auto mt-20' />
                <BiSearch className='absolute right-[270px] text-gray-600 top-24 w-7 h-7 lg:block hidden'></BiSearch>
            </div>
            <div className='w-4/6 mx-auto my-16'>
                <h1 className='text-xl mt-12 font-bold'>Popular searches</h1>
                <div className='my-5 bg- grid lg:grid-cols-4 gap-5'>
                    <div className=' bg-white  cursor-pointer  hover:bg-red-50 hover:shadow-2xl hover:shadow-yellow-500 hover:scale-110 duration-300 shadow-lg p-5 flex flex-col justify-center items-center  rounded-3xl'>
                        <img src={product2} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Carrot</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white hover:bg-red-50 hover:shadow-2xl hover:shadow-yellow-500 hover:scale-110 duration-300 cursor-pointer shadow-lg p-5 flex flex-col justify-center items-center  rounded-3xl'>
                        <img src={product1} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Brocoli</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white   cursor-pointer  hover:bg-red-50 hover:shadow-2xl hover:shadow-yellow-500 hover:scale-110 duration-300 shadow-lg p-5 flex flex-col justify-center items-center  rounded-3xl'>
                        <img src={product4} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Capsicum</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white  cursor-pointer  hover:bg-red-50 hover:shadow-2xl hover:shadow-yellow-500 hover:scale-110 duration-300 shadow-lg p-5 flex flex-col justify-center items-center  rounded-3xl'>
                        <img src={product3} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Garlic</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mt-12 font-bold my-5'>Top categories</h1>
                    <div className='flex flex-wrap gap-5'>
                        <p className='py-2  hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Fruits</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Pulses</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Vegetables</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Grains</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Flour</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Dry Fruits</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'> Ghee</p>
                        <p className='py-2 hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300 px-8  border rounded-lg text-lg font-semibold border-gray-300 text-gray-800  shadow-xl gray-200'>Salt, Sugar & Jaggery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;