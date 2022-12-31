import React, { useState } from 'react';
import image from '../assets/products/brosh.png'
import bg from '../assets/bg/Vector 8.png'
import product1 from '../assets/products/brosh.png'
import product2 from '../assets/products/Rectangle 31.png'
import product3 from '../assets/products/Rectangle 34.png'
import product4 from '../assets/products/Rectangle 35.png'
import { toast } from 'react-hot-toast';
const Offers = () => {
    const [number, setNumber] = useState(0)
    const addCartHandle = () => {
        toast.success('Item added on cart')
        setNumber(0)
    }
    return (
        <div style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '', backgroundPosition: 'top' }}>
      
                <div className='flex lg:flex-row flex-col lg:mt-1 mt-7 items-center gap-x-16 gap-y-5 w-3/4 mx-auto'>
                    <div className='hover:bg-red-50 hover:shadow-xl hover:shadow-amber-300 hover:scale-110 duration-300'>
                        <img src={image} className=' bg-white w-72 h-52 rounded-2xl shadow-lg shadow-gray-500' alt="vegetable" />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h1 className='text-4xl font-semibold'>Brocoli</h1>
                        <p className='text-2xl'>1kg</p>
                        <div className='flex items-center gap-x-3'>
                            <p className='text-2xl font-semibold text-red-500'>60.50/-</p>
                            <p className='text-2xl line-through text-gray-500'>68/-</p>
                        </div>
                        <p className='text-red-500 font-semibold'>4% Off</p>
                        <div className='flex items-center gap-x-5'>
                            <div className='flex items-center'>
                                <button onClick={() => number !== 0 && setNumber(number - 1)} className='bg-red-500 rounded-lg text-white py-1 px-4 text-center'>-</button>
                                <p className='py-1 px-4 text-gray-500 font-semibold'>{number}</p>
                                <button onClick={() => setNumber(number + 1)} className='bg-red-500 rounded-lg text-white py-1 px-3 text-center'>+</button>
                            </div>
                            <div>
                                <button onClick={addCartHandle} className='bg-red-500 rounded-xl py-1 px-3 font-semibold text-white text-xs'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-amber-600 lg:w-[500px] w-full rounded-xl bg-opacity-50 text-center p-5'>
                        <h1 className='text-lg font-semibold text-center text-gray-700'>Important Information</h1>
                        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aut minima nihil! Eos dolores officiis veritatis natus hic ullam. Hic labore reprehenderit, magni cumque totam cupiditate autem sit adipisci sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia error et eaque, cum delectus deserunt eum at ad aut eligendi porro minima numquam fugiat, quod ratione non, doloremque quae consectetur?</p>
                    </div>
    
            </div>
            <div className='my-16 mx-auto w-4/6'>
                <h1 className='text-xl mt-12 font-bold'>Similar Items</h1>
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
            </div>
        </div>
    );
};

export default Offers;