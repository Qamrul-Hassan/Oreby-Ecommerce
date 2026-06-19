import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import Flex from '../components/Flex';
import AboutImg1 from "../../src/assets/na1.png"
import AboutImg2 from "../../src/assets/na3.png"

const About = () => {
  return (
    <section className="lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
        <Container>
        <div className="lg:pb-[70px] pb-[10px]">
            <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
              About
            </h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link> <RxCaretRight /> About
            </h3>
          </div>
          <Flex className="justify-between mb-[90px]">
            <div className="w-[48%] relative">
                <img className='w-full' src={AboutImg1} alt="about_image" />
                <button className='absolute bottom-[50px] left-[50%] translate-x-[-50%] px-[70px] py-[20px] bg-[#262626] text-white font-sans text-[16px]'>Our Brands</button>
            </div>
            <div className="w-[48%] relative">
                <img className='w-full' src={AboutImg2} alt="about_image" />
                <button className='absolute bottom-[50px] left-[50%] translate-x-[-50%] px-[70px] py-[20px] bg-[#262626] text-white font-sans text-[16px]'>Our Stores</button>
            </div>
          </Flex>
          <div className="mb-[90px]">
            <p className='font-sans text-[#262626] lg:text-[25px] text-[16px] font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
          </div>
          <Flex className="justify-between">
            <div className="w-[31%]">
                <h2 className='font-sans text-[#262626] lg:text-[25px] text-[17px] font-bold mb-[10px]'>Our Vision</h2>
                <p className='font-sans text-[#262626] text-[16px] font-normal leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="w-[31%]">
                <h2 className='font-sans text-[#262626] lg:text-[25px] text-[17px] font-bold mb-[10px]'>Our Story</h2>
                <p className='font-sans text-[#262626] text-[16px] font-normal leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="w-[31%]">
                <h2 className='font-sans text-[#262626] lg:text-[25px] text-[17px] font-bold mb-[10px]'>Our Brands</h2>
                <p className='font-sans text-[#262626] text-[16px] font-normal leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default About
