import React, { useState } from 'react';
import image from '../assets/products/brosh.png'
import bg from '../assets/bg/Vector 8.png'
import product1 from '../assets/products/brosh.png'
import product2 from '../assets/products/Rectangle 31.png'
import product3 from '../assets/products/Rectangle 34.png'
import product4 from '../assets/products/Rectangle 35.png';
import { BiRightArrow } from 'react-icons/bi';
import { DiscountRounded, LocationCity } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState(1)

    const [delivery, setDelivery] = useState(10)
    const [tax, setTax] = useState(0.9)
    const sum = number * 60 + delivery + tax
    return (
        <div style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '', backgroundPosition: 'top' }}>

            <div className='flex lg:flex-row flex-col lg:mt-0 mt-5 gap-y-10 items-center gap-x-16 w-3/4 mx-auto'>
                <div>
                    <img src={image} className=' bg-white w-72 h-52 rounded-2xl shadow-lg shadow-gray-500' alt="vegetable" />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <h1 className='text-4xl font-semibold'>Brocoli</h1>
                    <div className='flex items-center gap-x-5'>
                        <div className='flex items-center'>
                            <button onClick={() => number !== 0 && setNumber(number - 1)} className='bg-red-500 rounded-lg text-white py-1 px-4 text-center'>-</button>
                            <p className='py-1 px-4 text-gray-500 font-semibold'>{number}</p>
                            <button onClick={() => setNumber(number + 1)} className='bg-red-500 rounded-lg text-white py-1 px-3 text-center'>+</button>
                        </div>

                    </div>
                    <div className='bg-yellow-400 p-5 rounded-lg flex justify-center gap-x-2'>
                        <DiscountRounded></DiscountRounded>
                        <div>
                            <p className='text-lg font-semibold'>Add a coupon code</p>
                            <p className='text-sm font-semibold'>Avail offer and get discount of your order</p>
                        </div>
                        <BiRightArrow></BiRightArrow>
                    </div>
                </div>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <img src={image} className='w-12 h-14 bg-gray-300 rounded-full' alt="" />
                        <p className='text-red-400 text-lg font-semibold'>{number}X</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <p className='text-2xl font-semibold text-red-500'>60.50/-</p>
                        <p className='text-2xl line-through text-gray-500'>68/-</p>
                    </div>
                    <p className='text-red-500 font-semibold'>4% Off</p>
                    <button onClick={()=>navigate('/search')} className='text-white bg-green-600 py-1 px-3 rounded-lg'>Add more</button>
                </div>
                <div className='w-96 p-4 font-semibold'>
                    <h1 className='text-lg font-semibold text-center'>Billing details</h1>
                    <div className='flex justify-between'>
                        <p>Item Total</p>
                        <p>{number * 60}.00/-</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Delivery Fee</p>
                        <p>{delivery}.00/-</p>
                    </div>
                    <div className='flex justify-between border border-gray-600 pb-2 border-x-0 border-t-0'>
                        <p>Taxes and charges</p>
                        <p>{tax}/-</p>
                    </div>
                    <div className='flex justify-between border border-gray-600 pb-2 border-x-0 border-t-0'>
                        <p>Total Bill</p>
                        <p>{sum}/-</p>
                    </div>

                </div>
            </div>
            <div className='mt-16 mx-auto w-4/6'>
                <h1 className='text-xl mt-12 font-bold'>Similar Items</h1>
                <div className='my-5 bg- grid lg:grid-cols-4 gap-5'>
                    <div className=' bg-white shadow-lg p-5 flex flex-col justify-center items-center  rounded-lg'>
                        <img src={product2} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Carrot</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white shadow-lg p-5 flex flex-col justify-center items-center  rounded-lg'>
                        <img src={product1} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Brocoli</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white shadow-lg p-5 flex flex-col justify-center items-center  rounded-lg'>
                        <img src={product4} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Capsicum</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                    <div className=' bg-white shadow-lg p-5 flex flex-col justify-center items-center  rounded-lg'>
                        <img src={product3} alt="veg" className='' />
                        <p className='text-xl font-semibold'>Garlic</p>
                        <p>1kg</p>
                        <p className='text-lg font-semibold'>30.50/-</p>
                    </div>
                </div>
            </div>
            <div className='w-4/6 mx-auto my-10'>
                <p className=' font-semibold text-center my-3'>Please select your address and make your payment</p>
                <div className='flex lg:flex-row gap-y-5 flex-col justify-between items-center'>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <DirectionsIcon />
                        </IconButton>
                    </Paper>
                    <div>
                        <p className='flex items-center gap-2'>Home <LocationCity className='text-amber-500'></LocationCity></p>
                        <p className='border border-x-0 border-t-0 border-gray-600 my-3'>Hyderabad,India</p>
                        <button className='text-white font-semibold bg-green-600 py-1 px-7 rounded-lg'>PAY</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;