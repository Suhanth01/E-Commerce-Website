import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BiCurrentLocation } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiReceiptPercent } from 'react-icons/hi2'
import logo from '../assets/logo/Asset 2@3x (1) 5.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut, open, setOpen } = useContext(AuthContext)
    const logOutHandle = () => {
        logOut()
            .then(() => toast.success('User logged out'))
            .catch(() => { })
            navigate('/')
    }
    return (
        <div className='flex justify-between items-center lg:mx-4 bg-gray-30 lg:p-4 p-2'>
            <div className='lg:flex justify-start items-center lg:gap-14'>
                <Link to='/'> <img src={logo} alt="logo" className='lg:w-16 w-12' /></Link>
                {/* <div>
                    <h1 className='text-md  font-semibold uppercase'>Bee <br /><span>2</span><br /> bee</h1>
                  
                </div> */}
                <div className='lg:flex gap-x-2 items-center text-gray-500  hidden'>
                    <BiCurrentLocation className='lg:w-7 w-4 lg:h-7 h-4 '></BiCurrentLocation>
                    <select name="location" id="location" className='border-2 border-gray-500 text-center border-x-0 border-t-0'>
                        <option value="Hyderabad">Hyderabad,Green valley,India</option>
                        <option value="Dhaka">Dhaka,Bangladesh</option>
                        <option value="Chittagong">Chittagong,Bangladesh</option>
                        <option value="Kolcata">Kolkata,India</option>
                    </select>
                </div>
            </div>

            <div className='flex items-center justify-between lg:gap-x-28 gap-4'>
                {
                    user?.email && <div className='flex lg:gap-x-5 gap-x-2'>
                        <NavLink to='/search' className={({ isActive }) => isActive ? 'text-amber-500 flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center font-semibold' : 'flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center text-gray-800 font-semibold'}> <GoSearch className='lg:block hidden'></GoSearch> Search </NavLink>

                        <NavLink to='/offers' className={({ isActive }) => isActive ? 'text-amber-500 flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center font-semibold' : 'flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center text-gray-800 font-semibold'}> <HiReceiptPercent className='lg:block hidden'></HiReceiptPercent> Offers </NavLink>

                        <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-amber-500 flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center font-semibold' : 'flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center text-gray-800 font-semibold'}> <GiShoppingCart className='lg:block hidden'></GiShoppingCart> Cart </NavLink>

                        <NavLink to='/profile' className={({ isActive }) => isActive ? 'text-amber-500 flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center font-semibold' : 'flex lg:text-xl text-md cursor-pointer justify-center gap-x-1 items-center text-gray-800 font-semibold'}> <FaRegUserCircle className='lg:block hidden'></FaRegUserCircle>Profile</NavLink>

                    </div>
                }
                {
                    user?.email ? <button className='text-gray-700 bg-amber-500 lg:text-lg py-1 px-2 text-xs font-semibold rounded-2xl shadow-lg shadow-gray-200' onClick={logOutHandle}>Logout</button> : <button className='text-gray-700 bg-amber-500 text-lg py-1 px-3 font-semibold rounded-2xl shadow-lg shadow-gray-200' onClick={() => setOpen(!open)}>SignUp/signIn</button>
                }
            </div>
        </div>
    );
};

export default Navbar;