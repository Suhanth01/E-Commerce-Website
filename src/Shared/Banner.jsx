import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import image1 from '../assets/images/image 74.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/10122.jpg'
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {

    const handleType = () => {
        // access word count number
        console.log(1)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className='flex lg:flex-row flex-col-reverse items-center justify-center w-full'>
            <div className='flex flex-col gap-y-3 lg:w-1/2 w-11/12 mx-auto'>

                <div className=''>
                    <h1 className='text-5xl font-semibold uppercase'>Begin your business</h1>
                    <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: '',fontSize:'2rem' }}>
                    Welcome to redsoft, order form your <br /> {' '}
                        <span style={{ color: 'orange', fontWeight: 'bold',fontStyle:'normal',fontSize:'2rem' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Favorite stores', 'With amazing deals', 'Happy shopping']}
                                loop={5}
                                cursor
                                cursorStyle='...'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                </div>
                {/* <div className='flex flex-col gap-y-5'>
                    <h1 className='text-5xl font-semibold uppercase'>Begin your business</h1>
                    <p className='text-4xl'>Welcome to redsoft, order form your <br /> favorite stores</p>
                </div> */}
                {/* <div>
                    <input type="text" className='py-1 w-4/5 px-3 border' placeholder='Locate me'/>
                </div> */}
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
            </div>

            {/* <img src={image} alt="banner-img" className='w-full h-80' /> */}
            <div className='lg:w-1/2 w-11/12 mx-auto'>
                <Carousel fade autoPlay={true} infiniteLoop={true} interval={3000} showArrows={false} showStatus={false} showThumbs={false}>
                    <div>
                        <img src={image1} alt="banner-img" className='w-full h-80' />

                    </div>
                    <div>
                        <img src={image2} alt="banner-img" className='w-full h-80' />

                    </div>
                    <div>
                        <img src={image3} alt="banner-img" className='w-full h-80' />

                    </div>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;