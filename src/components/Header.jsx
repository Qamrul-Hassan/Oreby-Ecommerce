import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let [show, setShow] = useState(false)
  let barref = useRef()

  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(barref.current.contains(e.target)){
        setShow(!show)
      }else{
        setShow(false)
      }
    })
  },[show])

  return (
    <>
      <nav className='fixed items-center top-0 left-0 w-full bg-white z-50 px-2 lg:px-0 lg:py-5 py-3'>
        <Container>
          <Flex className="justify-between items-center">
            <div className="w-1/3 items-center">
            <Link to="/">
              <img className='inline-block' src={Logo} alt="logo" />
            </Link>
            </div>
            <div className="w-2/3 items-center">
              <ul className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${show == true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}>
                <li className='text-white flex justify-between items-center lg:hidden'>Menu <RxCross2 className='mr-[20px]'/></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/">Home</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/shop">Shop</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/about">About</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#"><Link to="/contact">Contact</Link></a></li>
                <li><a className='lg:hover:text-[#262626] hover:text-white lg:border-none border-b-2 border-[#767676] rounded-sm' href="#">Journal</a></li>
              </ul>
            </div>
            <div className="lg:hidden cursor-pointer" ref={barref}>
              <FaBars />
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Header