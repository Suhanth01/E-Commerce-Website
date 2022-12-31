import React from 'react';
import image1 from '../assets/images/image 74.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/10122.jpg'
import image4 from '../assets/new/new1.jpg'
import image5 from '../assets/new/new2.jpg'
import image6 from '../assets/new/new3.jpg'
import bg from '../assets/bg/Vector 8.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeTwo = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{ background: `url(${bg})` }} >
            {/* <div className='flex lg:flex-row flex-col lg:justify-center lg:items-center gap-x-5 h-[400px] p-5' style={{ background: `url(${bg})` }} >
                <div>
                    <img src={image1} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div>
                    <img src={image2} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div>
                    <img src={image3} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
            </div> */}

            <Slider {...settings} className="flex gap-x-10">
                <div className='p-4'>
                    <img src={image1} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div className='p-4'>
                    <img src={image2} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div className='p-4'>
                    <img src={image3} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div className='p-4'>
                    <img src={image4} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div className='p-4'>
                    <img src={image5} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
                <div className='p-4'>
                    <img src={image6} alt="img" className='w-[500px] lg:h-72 border rounded-lg shadow-xl shadow-gray-200' />
                </div>
            </Slider>
        </div>


    );
};

export default HomeTwo;