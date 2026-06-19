import React from 'react';
import BanImg from "../assets/banner.png";
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: 'absolute',
                    left: "50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='slick-number'
                style={{
                    padding: "10px 0",
                    width: "30px",
                    color: "transparent",
                    borderRight: "3px #fff solid"
                }}
            >
                0{i + 1}
            </div>
        )
    };
    return (
        <>
            <Slider {...settings}>
                <div className="">
                    <img src={BanImg} alt="" />
                </div>
                <div className="">
                    <img src={BanImg} alt="" />
                </div>
                <div className="">
                    <img src={BanImg} alt="" />
                </div>
            </Slider>
            <Container>
                <Flex className="justify-between lg:py-[30px] py-[10px] px-1 lg:px-0">
                    <div className="flex items-center">
                        <h2 className='text-[#6D6D6D] lg:text-[16px] text-[11px] font-sans'><span className='lg:pr-5 pr-1 font-bold text-[#000]'>2</span>Two years warranty</h2>
                    </div>
                    <div className="flex lg:gap-x-5 gap-x-1 items-center">
                        <FaTruck/>
                        <h2 className='text-[#6D6D6D] lg:text-[16px] text-[11px] font-sans'>Free shipping</h2>
                    </div>
                    <div className="flex lg:gap-x-5 gap-x-1 items-center">
                        <IoReload/>
                        <h2 className='text-[#6D6D6D] lg:text-[16px] text-[11px] font-sans'>Return policy in 30 days</h2>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Banner