import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import {FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className='py-[58px] bg-[#F5F5F3] px-2'>
    <Container>
      <Flex className=" flex-wrap">
            <div className="lg:w-[15%] w-[30%]">
              <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>Menu</h3>
              <ul className='mt-4'>
                <Link to="/">
                  <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Home</li>
                </Link>
                <Link to="/shop">
                  <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Shop</li>
                </Link>

                <Link to="/about">
                  <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>About</li>
                </Link>

                <Link to="/contact">
                  <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Contact</li>
                </Link>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>
                  Journal
                </li>
              </ul>
            </div>
            <div className="lg:w-[15%] w-[30%]">
              <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>shop</h3>
              <ul className='mt-4'>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 1</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 2</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 3</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 4</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Category 5</li>
              </ul>
            </div>
            <div className="lg:w-[15%] w-[40%]">
              <h3 className='font-sans text-[16px] font-bold text-[#262626] uppercase leading-[23px]'>help</h3>
              <ul className='mt-4'>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Privacy Policy</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Terms & Conditions</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Special E-shop</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Shipping</li>
                <li className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] py-1'>Secure Payments</li>
              </ul>
            </div>
            <div className="lg:w-[30%] w-[50%] mt-5 lg:mt-0">
              <div className="font-sans text-[16px] font-bold text-[#262626] leading-[27px]"><a href="tel:+052">(052) 611-5711</a></div>
              <div className="font-sans text-[16px] font-bold text-[#262626] leading-[27px]"><a href="mailto:">company@domain.com</a></div>
              <p className='font-sans text-[14px] font-normal text-[#6D6D6D] leading-[23px] mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="lg:w-[25%]  w-[50%] flex justify-end lg:justify-start items-center lg:items-start">
              <div className="">
                <Link to="/">           
                <img src={Logo} alt="logo"/>
                </Link>
              </div>
            </div>
      </Flex>

      <Flex className="mt-[65px] justify-between flex-wrap"> 
          <div className=" flex gap-x-5 items-end w-full lg:w-[50%] justify-center lg:justify-start">
            <div className=""><FaFacebookF className='font-dmsans text-[24px] text-[#262626]'/></div>
            <div className=''><FaLinkedinIn className='font-dmsans text-[24px] text-[#262626]' /></div>
            <div className=''><FaInstagram className='font-dmsans text-[24px] text-[#262626]' /></div>
          </div>

          <div className=" w-full lg:w-[50%] flex lg:justify-end">
            <p className='font-dmsans text-[14px] text-[#6D6D6D] font-normal leading-[23px] text-center mt-5 lg:mt-0'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
      </Flex>
    </Container>
    </footer>
    </>
  )
}

export default Footer