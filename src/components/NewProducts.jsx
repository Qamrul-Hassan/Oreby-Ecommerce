import React from 'react'
import Container from './Container'
import Flex from './Flex'
import NewItem1 from "../assets/new1.png"
import NewItem2 from "../assets/new2.png"
import NewItem3 from "../assets/new3.png"
import NewItem4 from "../assets/new4.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const NewProducts = () => {
    return (
        <>
            <section className='px-1 lg:px-0'>
                <Container>
                    <div className="">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold lg:pb-[48px] pb-[10px]'>New Products</h2>
                    </div>
                    <Flex className="justify-between flex-wrap">

                        <div className="lg:w-[24%] w-[48%] mb-[20px] lg:mb-0 group">
                            <Link to="/shop">
                                <div className="">
                                    <div className="relative overflow-hidden">
                                        <img className='w-full lg:h-[250px] h-[150px]' src={NewItem1} alt="product_img" />
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
                                        <img className='w-full lg:h-[250px] h-[150px]' src={NewItem2} alt="product_img" />
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
                                        <img className='w-full lg:h-[250px] h-[150px]' src={NewItem3} alt="product_img" />
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
                                        <img className='w-full lg:h-[250px] h-[150px]' src={NewItem4} alt="product_img" />
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

export default NewProducts