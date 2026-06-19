import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <section className='lg:py-[50px] py-[30px] text-center lg:text-start'>
                <Container>
                    <div className="">
                        <h3 className='font-sans font-bold lg:text-[200px] text-[100px] text-[#262626]'>404</h3>
                        <p className='font-sans font-normal text-[16px] text-[#767676] lg:w-[644px] leading-[30px] pb-[50px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                        <div className="relative inline-block">
                            <input type="search" placeholder='Type to search' className='border-[1px] border-[#F0F0F0] lg:w-[644px] w-[300px] py-4 pl-5 pr-12' />
                            <div className="absolute top-[50%] right-[15px] translate-y-[-50%]">
                                <FaSearch />
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <Link to="/">
                                <p className='font-sans font-bold text-[14px] text-[#FFF] px-[55px] py-[16px] bg-[#262626] inline-block'>Back to Home</p>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ErrorPage