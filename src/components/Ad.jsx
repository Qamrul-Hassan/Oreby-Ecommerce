import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Ad1 from "../assets/ad1.png"
import Ad2 from "../assets/ad2.png"
import Ad3 from "../assets/ad3.png"


const Ad = () => {
    return (
        <>
            <section className='lg:py-[125px] py-[30px] px-1 lg:px-0'>
                <Container>
                    <Flex className="justify-between">
                        <div className="w-[48%]">
                            <img className='w-full' src={Ad1} alt="ad1" />
                        </div>
                        <div className="w-[48%]">
                            <div className="lg:pb-[31px] pb-[9px]">
                                <img className='w-full' src={Ad2} alt="ad2" />
                            </div>
                            <div className="">
                                <img className='w-full' src={Ad3} alt="ad3" />
                            </div>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Ad