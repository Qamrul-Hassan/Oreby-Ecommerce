import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const Contact = () => {
    return (
        <section className="lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
            <Container>
                <div className="lg:pb-[70px] pb-[10px]">
                    <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
                        Contact
                    </h2>
                    <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                        <Link to="/">Home</Link> <RxCaretRight /> Contact
                    </h3>
                </div>
                <div className="mb-[80px]">
                    <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]' >Fill up a Form</h2>
                    <form action="">
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Name</label> <br />
                        <input className='w-1/2 pb-4 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your name here' /><br />
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Email</label><br />
                        <input className='w-1/2 pb-4 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your email here' /><br />
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Message</label><br />
                        <textarea className='w-1/2 pb-20 border-b-[1px] border-[#F0F0F0] outline-none resize-none mb-[30px]' type="text" placeholder='Your message here' />
                    </form>
                        <button type='submit' className='font-sans text-[#fff] text-[16px] font-bold px-[80px] py-[15px] bg-[#262626]'>Post</button>
                </div>
                <div className="">
                <iframe className='w-full h-[572px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.039158573878!2d90.3655622384653!3d23.747030308758895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1720776002377!5m2!1sen!2sbd"></iframe>
                </div>
            </Container>
        </section>
    )
}

export default Contact
