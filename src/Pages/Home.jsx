import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Banner from '../Shared/Banner';
import HomeProducts from '../Shared/HomeProducts';
import Login from '../Shared/Login';
import SecondBanner from '../Shared/SecondBanner';
import SignUp from '../Shared/SignUp';
import Spinner from '../Shared/Spinner';
import HomeTwo from './HomeTwo';

const Home = () => {
    const { open, signIn, user, loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner></Spinner>
    }
    return (

        <div className='w-11/12 mx-auto mt-2 relative '>
            <div className={open ? `flex justify-start duration-500 w-2/5 bg-white p-5 rounded-2xl absolute lg:bottom-[-300px] bottom-[-0px] lg:right-[-100px] right-36 z-10` : `flex justify-center duration-300 items-center w-2/5 bg-gray-100 p-5 rounded-2xl absolute bottom-24 right-[-400px] hidden z-10`}>
                {
                    signIn ? <Login></Login> : <SignUp></SignUp>
                }
            </div>
            <div>
                {
                    user?.email ? <HomeTwo></HomeTwo> : <Banner></Banner>
                }
            </div>
            <div className='w-full absolute lg:bottom-[-450px] bottom-[-1450px]'>
                {
                    user?.email ? <HomeProducts></HomeProducts> : <SecondBanner></SecondBanner>
                }
            </div>
        </div>

    );
};

export default Home;