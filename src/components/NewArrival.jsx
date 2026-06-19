import React, { useContext } from 'react';
import Container from './Container';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { apiData } from './ContextApi';
import Slider from "react-slick";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#979797] rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 lg:right-[-10px] right-0 cursor-pointer z-40'
            onClick={onClick}
        >
            <HiOutlineArrowNarrowRight className='text-white lg:text-[25px] text-[18px]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#979797] rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 lg:left-[-10px] left-0 cursor-pointer z-40'
            onClick={onClick}
        >
            <HiOutlineArrowNarrowLeft className='text-white lg:text-[25px] text-[18px]' />
        </div>
    );
}

const NewArrival = () => {
    const dispatch = useDispatch();
    const data = useContext(apiData);

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, Qty: 1 }));
        toast.success("Added to cart successfully");
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='lg:pb-[100px] pb-[50px] px-4 lg:px-0'>
            <Container>
                <h2 className='font-sans text-[#262626] lg:text-[36px] text-[24px] font-bold text-center lg:mb-[50px] mb-[30px]'>
                    New Arrivals
                </h2>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="px-[10px]">
                            <div className="relative group border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                {/* Product Image */}
                                <Link to="/shop">
                                    <img 
                                        className='w-full lg:h-[250px] h-[200px] object-cover'
                                        src={item.thumbnail} 
                                        alt="product_img" 
                                    />
                                </Link>

                                {/* Discount Tag */}
                                <h5 className='absolute top-[15px] left-[15px] bg-black text-white text-[14px] px-[12px] py-[6px] rounded-md'>
                                    {item.discountPercentage}%
                                </h5>

                                {/* Hover Actions */}
                                <div className="absolute left-0 bottom-[-100%] w-full bg-white p-4 transition-all duration-500 group-hover:bottom-0">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-gray-600 text-sm hover:text-black cursor-pointer transition'>
                                                Add to Wish List
                                            </h3>
                                            <FaHeart className="text-gray-600" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-gray-600 text-sm hover:text-black cursor-pointer transition'>
                                                Compare
                                            </h3>
                                            <TfiReload className="text-gray-600" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <button 
                                                onClick={() => handleAddToCart(item)}
                                                className='text-gray-600 text-sm hover:text-black cursor-pointer transition flex items-center gap-2'
                                            >
                                                Add to Cart
                                                <FaShoppingCart />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <Link to="/shop">
                                <div className="mt-4 text-center">
                                    <h3 className='font-semibold text-gray-800 lg:text-lg text-md truncate'>
                                        {item.title}
                                    </h3>
                                    <h4 className='text-gray-600 text-md mt-1'>
                                        ${item.price}
                                    </h4>
                                    <h5 className='text-gray-500 text-sm mt-1'>
                                        Available Stock: {item.stock}
                                    </h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </section>
    );
};

export default NewArrival;
