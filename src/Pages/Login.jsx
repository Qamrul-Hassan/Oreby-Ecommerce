import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const Login = () => {
  return (
    <section className="lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
      <Container>
        <div className="lg:pb-[70px] pb-[10px]">
          <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
            Login
          </h2>
          <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
            <Link to="/">Home</Link> <RxCaretRight /> Login
          </h3>
        </div>
        <div className="pb-[60px] border-b-[1px] border-[#F0F0F0] mb-[60px]">
          <p className="font-sans text-[#767676] text-[16px] font-normal w-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className="pb-[60px] mb-[60px] border-b-[1px] border-[#F0F0F0]">
          <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]' >Returning Customer</h2>
          <form action="" className='flex gap-x-6'>
            <div className="w-[30%]">
              <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Email address</label> <br />
              <input className='w-1/2 pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="email" placeholder='company@domain.com' />
            </div>
            <div className="w-[30%]">
              <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Password</label> <br />
              <input className='w-1/2 pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="password" placeholder='..............................' />
            </div>
          </form>
          <Link to="/my-account">         
          <button className='font-sans text-[#262626] text-[16px] font-bold px-[70px] py-[10px] border-[1px] border-[#2B2B2B]'>Login</button>
          </Link>
        </div>
        <div className="">
          <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]'>New Customer</h2>
          <p className='font-sans text-[#262626] text-[16px] font-normal w-1/2 pb-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          <Link to="/signup">
            <button type='submit' className='font-sans text-[#fff] text-[16px] font-bold px-[80px] py-[15px] bg-[#262626]'>Continue</button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Login
