import React from 'react'
import Container from './Container'
import BigAddImg from "../assets/bigadd.png"

const BigAdd = () => {
  return (
    <>
        <section className='lg:py-[120px] py-[30px]'>
            <Container>
                <div className="">
                    <img className='w-full' src={BigAddImg} alt="" />
                </div>
            </Container>
        </section>
    </>
  )
}

export default BigAdd