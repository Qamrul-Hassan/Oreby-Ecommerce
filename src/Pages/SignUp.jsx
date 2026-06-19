import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const SignUp = () => {

    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate()

    let [passshow, setPassShow] = useState(false)

    let [firstName, setFirstName] = useState("");
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }



    let handleSignup = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => { })
            .then(() => {
                set(ref(db, 'users/'), {
                    username: firstName,
                    email: email,
                });
            })
            .then(() => {
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <section className="lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
            <Container>
                <div className="lg:pb-[70px] pb-[10px]">
                    <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
                        Sign Up
                    </h2>
                    <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                        <Link to="/">Home</Link> <RxCaretRight /> Sign Up
                    </h3>
                </div>
                <div className="pb-[60px] border-b-[1px] border-[#F0F0F0] mb-[60px]">
                    <p className="font-sans text-[#767676] text-[16px] font-normal w-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <form action="">
                    <div className="pb-[60px] mb-[60px] border-b-[1px] border-[#F0F0F0]">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]'>Your Personal Details</h2>
                        <div className='flex justify-between'>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">First Name</label> <br />
                                <input onChange={handleFirstName} className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='First Name' />
                            </div>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Last Name</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Email address</label> <br />
                                <input onChange={handleEmail} className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="email" placeholder='company@domain.com' />
                            </div>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Telephone</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your phone number' />
                            </div>
                        </div>
                    </div>
                    <div className="pb-[60px] mb-[60px] border-b-[1px] border-[#F0F0F0]">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]'>New Customer</h2>
                        <div className='flex justify-between'>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Address 1</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='4279 Zboncak Port Suite 6212' />
                            </div>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Address 2</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='—' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">City</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your city' />
                            </div>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Post Code</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='05228' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Division</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Please select' />
                            </div>
                            <div className="w-[48%]">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">District</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Please select' />
                            </div>
                        </div>
                    </div>
                    <div className="pb-[60px] mb-[60px] border-b-[1px] border-[#F0F0F0]">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold mb-[50px]'>Your Password</h2>
                        <div className='flex justify-between'>
                            <div className="w-[48%] relative">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Password</label> <br />
                                <input onChange={handlePassword} className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type={passshow == true ? "text" : "password"} placeholder='Password' />
                                <div onClick={() => setPassShow(!passshow)} className="absolute top-10 right-0">{passshow ? <FaRegEye /> : <FaRegEyeSlash />}</div>
                            </div>
                            <div className="w-[48%] relative">
                                <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Repeat Password</label> <br />
                                <input className='w-full pb-4 pt-3 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type={passshow == true ? "text" : "password"} placeholder='Password' />
                                <div onClick={() => setPassShow(!passshow)} className="absolute top-10 right-0">{passshow ? <FaRegEye /> : <FaRegEyeSlash />}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-[60px]">
                        <h3 className='ont-sans text-[#767676] text-[14px] font-normal pb-6'>I have read and agree to the Privacy Policy</h3>
                        <h3 className='ont-sans text-[#767676] text-[14px] font-normal'>Subscribe Newsletter</h3>
                    </div>
                    <button onClick={handleSignup} className='font-sans text-[#fff] text-[16px] bg-[#262626] font-bold px-[70px] py-[10px] border-[1px] border-[#2B2B2B]'>Login</button>
                </form>
            </Container>
        </section >
    )
}

export default SignUp
