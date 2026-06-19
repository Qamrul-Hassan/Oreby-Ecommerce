import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import Flex from '../components/Flex';
import { useSelector } from 'react-redux';

const Checkout = () => {
    let data = useSelector((state) => state.product.cartItem);

    const { totalPrice, totalQuantity } = data.reduce(
        (acc, item) => {
          acc.totalPrice += item.price * item.Qty;
          acc.totalQuantity += item.Qty;
          return acc;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
    return (
        <>
            <section className="lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
                <Container>
                    <div className="lg:pb-[70px] pb-[10px]">
                        <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
                            Checkout
                        </h2>
                        <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link> <RxCaretRight /> Checkout
                        </h3>
                    </div>
                    <div className="pb-[80px]">
                        <h3 className='font-sans text-[#262626] text-[16px] font-normal'><span className='font-sans text-[#767676] text-[16px] font-normal'>Have a coupon?</span> Click here to enter your code</h3>
                    </div>
                    <div className="">
                        <h3 className='font-sans text-[#262626] text-[39px] font-bold pb-[40px]'>Billing Details</h3>
                        <form action="">
                            <Flex className="justify-between mb-3">
                                <div className="w-[48%]">
                                    <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>First Name *</label>
                                    <input type="text" placeholder='First Name' className='w-full border-b-[1px] py-3 border-[#F0F0F0] outline-none' />
                                </div>
                                <div className="w-[48%]">
                                    <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Last Name *</label>
                                    <input type="text" placeholder='Last Name' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-4 outline-none' />
                                </div>
                            </Flex>
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Companye Name (optional)</label>
                            <input type="text" placeholder='Company Name' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Country *</label>
                            <input type="text" placeholder='Country' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Street Address *</label>
                            <input type="text" placeholder='House number and street name' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-3 outline-none' />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Town/City *</label>
                            <input type="text" placeholder='Town/City' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>County (optional)</label>
                            <input type="text" placeholder='County' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Post Code *</label>
                            <input type="text" placeholder='Post Code' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Phone *</label>
                            <input type="text" placeholder='Phone' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                            <label htmlFor="" className='block pb-2 font-sans text-[#262626] text-[16px] font-bold'>Email Address *</label>
                            <input type="text" placeholder='Email' className='w-full border-b-[1px] py-3 border-[#F0F0F0] mb-10 outline-none' />
                        </form>
                    </div>
                    <div className="my-[100px]">
                        <h3 className='font-sans text-[#262626] text-[39px] font-bold pb-[40px]'>Your Order</h3>
                        <table className="border-2">
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Total Quantity
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                                    {totalQuantity} 
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Subtotal
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#767676] font-normal">
                                    {totalPrice.toFixed(2)} $
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Total
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                                    {totalPrice.toFixed(2)} $
                                </td>
                            </tr>
                        </table>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Checkout