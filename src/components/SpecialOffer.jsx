import React from 'react'
import SO1 from "../assets/so1.png"
import SO2 from "../assets/so2.png"
import SO3 from "../assets/so3.png"
import SO4 from "../assets/so4.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'

const SpecialOffer = () => {
    return (
        <>
            <section className='lg:pb-[120px] pb-5 px-1 lg:px-0'>
                <Container>
                    <div className="">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold lg:pb-[48px] pb-[10px]'>Special Offers</h2>
                    </div>
                    <Flex className="justify-between flex-wrap">
                        <div className="lg:w-[24%] w-[48%] mb-[20px] lg:mb-0 group">
                            <Link to="/shop">
                                <div className="">
                                    <div className="relative overflow-hidden">
                                        <img className='w-full lg:h-[250px] h-[150px]' src={SO1} alt="product_img" />
                                        <h5 className='absolute lg:top-[20px] lg:left-[26px] left-0 top-0 font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] lg:py-[8px] py-[6px] lg:px-[28px] px-[20px] rounded-sm'>NEW</h5>
                                        <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-[15px] relative z-20 items-center">
                                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>Basic Crew Neck Tee</h3>
                                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>$44.00</h4>
                                    </div>
                                    <h5 className='text-[#767676] font-sans lg:text-[16px] text-[10px] font-normal'>Black</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-[24%] w-[48%] mb-[20px] lg:mb-0 group">
                            <Link to="/shop">
                                <div className="">
                                    <div className="relative overflow-hidden">
                                        <img className='w-full lg:h-[250px] h-[150px]' src={SO2} alt="product_img" />
                                        <h5 className='absolute lg:top-[20px] lg:left-[26px] left-0 top-0 font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] lg:py-[8px] py-[6px] lg:px-[28px] px-[20px] rounded-sm'>NEW</h5>
                                        <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-[15px] relative z-20 items-center">
                                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>Basic Crew Neck Tee</h3>
                                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>$44.00</h4>
                                    </div>
                                    <h5 className='text-[#767676] font-sans lg:text-[16px] text-[10px] font-normal'>Black</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-[24%] w-[48%] mb-[20px] lg:mb-0 group">
                            <Link to="/shop">
                                <div className="">
                                    <div className="relative overflow-hidden">
                                        <img className='w-full lg:h-[250px] h-[150px]' src={SO3} alt="product_img" />
                                        <h5 className='absolute lg:top-[20px] lg:left-[26px] left-0 top-0 font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] lg:py-[8px] py-[6px] lg:px-[28px] px-[20px] rounded-sm'>NEW</h5>
                                        <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-[15px] relative z-20 items-center">
                                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>Basic Crew Neck Tee</h3>
                                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>$44.00</h4>
                                    </div>
                                    <h5 className='text-[#767676] font-sans lg:text-[16px] text-[10px] font-normal'>Black</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-[24%] w-[48%] mb-[20px] lg:mb-0 group">
                            <Link to="/shop">
                                <div className="">
                                    <div className="relative overflow-hidden">
                                        <img className='w-full lg:h-[250px] h-[150px]' src={SO4} alt="product_img" />
                                        <h5 className='absolute lg:top-[20px] lg:left-[26px] left-0 top-0 font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] lg:py-[8px] py-[6px] lg:px-[28px] px-[20px] rounded-sm'>NEW</h5>
                                        <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex gap-x-3 justify-end items-center">
                                                <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-[15px] relative z-20 items-center">
                                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>Basic Crew Neck Tee</h3>
                                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>$44.00</h4>
                                    </div>
                                    <h5 className='text-[#767676] font-sans lg:text-[16px] text-[10px] font-normal'>Black</h5>
                                </div>
                            </Link>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default SpecialOffer