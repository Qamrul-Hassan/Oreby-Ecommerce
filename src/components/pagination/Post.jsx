import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ allData, catwiseitem, multilist, pricewiseItem }) => {

  let dispatch = useDispatch()

  let handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, Qty: 1 }));
    toast.success("Added to cart successfully")
  }

  let [itemlimit, setItemLimit] = useState([])
  let [priceitemlimit, setPriceItemLimit] = useState([])
  let [catShow, setCatShow] = useState(true)
  let [prishow, setPrishow] = useState(true)

  useEffect(() => {
    let show5item = catwiseitem.slice(0, 5)
    let show5itemPri = pricewiseItem.slice(0, 5)
    setItemLimit(show5item)
    setPriceItemLimit(show5itemPri)
  }, [catwiseitem, pricewiseItem])

  let handleShowProduct = () => {
    setItemLimit(catwiseitem)
    setPriceItemLimit(pricewiseItem)
    setCatShow(false)
    setPrishow(false)
  }

  let handleHideProduct = () => {
    let show5item = catwiseitem.slice(0, 5)
    let show5itemPri = pricewiseItem.slice(0, 5)
    setItemLimit(show5item)
    setCatShow(true)
    setPriceItemLimit(show5itemPri)
    setPrishow(true)
  }
  return (
    <>
      {pricewiseItem.length > 0 ?
        <div className="">
          <div className="flex gap-x-3 flex-wrap">
            {priceitemlimit.map((item) => (
              <div className="lg:w-[32%] w-[48%] px-0 group mb-[30px]">
                <div className="">
                  <div className="relative overflow-hidden">
                    <Link to={`/shop/${item.id}`}>
                      <img className='w-full lg:h-[250px] h-[170px]' src={item.thumbnail} alt="product_img" />
                    </Link>
                    <h5 className='absolute top-[10px] left-[20px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>{item.discountPercentage}%</h5>
                    <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                        <TfiReload />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center cursor-pointer">
                        <h3 onClick={() => handleAddToCart(item)} className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                        <ToastContainer
                          position="top-center"
                          autoClose={900}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover={false}
                          theme="dark"
                        />
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                  <Link to={`/shop/${item.id}`}>
                    <div className="">
                      <div className="flex justify-between pt-[15px] relative z-20 items-center">
                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>{item.title}</h3>
                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>${item.price}</h4>
                      </div>
                      <h5 className='text-[#767676] font-sans lg:text-[18px] text-[10px] font-normal pb-[10px]'>Available Stock: {item.stock}</h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {prishow ? pricewiseItem.length > 5 &&
            <div className="text-center w-full relative z-30 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:content-[''] after:h-[1px] after:w-full after:bg-[#262626] after:z-20">
              <button onClick={handleShowProduct} className='text-[20px] font-sans relative z-50 border-[1px] rounded-2xl border-[#262626] px-5 py-2 bg-white duration-300 ease-in-out hover:bg-[#262626] hover:text-white'>Show All</button>
            </div>
            :
            <div className="text-center w-full relative z-30 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:content-[''] after:h-[1px] after:w-full after:bg-[#262626] after:z-20">
              <button onClick={handleHideProduct} className='text-[20px] font-sans relative z-50 border-[1px] rounded-2xl border-[#262626] px-5 py-2 bg-white duration-300 ease-in-out hover:bg-[#262626] hover:text-white'>Hide</button>
            </div>
          }
        </div>
        :
        catwiseitem.length > 0 ?
          <div className="">
            <div className="flex gap-x-3 flex-wrap">
              {itemlimit.map((item) => (
                <div className="lg:w-[32%] w-[48%] px-0 group mb-[30px]">
                  <div className="">
                    <div className="relative overflow-hidden">
                      <Link to={`/shop/${item.id}`}>
                        <img className='w-full lg:h-[250px] h-[170px]' src={item.thumbnail} alt="product_img" />
                      </Link>
                      <h5 className='absolute top-[10px] left-[20px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>{item.discountPercentage}%</h5>
                      <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                        <div className="flex gap-x-3 justify-end items-center">
                          <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                          <FaHeart />
                        </div>
                        <div className="flex gap-x-3 justify-end items-center">
                          <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                          <TfiReload />
                        </div>
                        <div className="flex gap-x-3 justify-end items-center cursor-pointer">
                          <h3 onClick={() => handleAddToCart(item)} className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                          <ToastContainer
                            position="top-center"
                            autoClose={900}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                          />
                          <FaShoppingCart />
                        </div>
                      </div>
                    </div>
                    <Link to={`/shop/${item.id}`}>
                      <div className="">
                        <div className="flex justify-between pt-[15px] relative z-20 items-center">
                          <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold '>{item.title}</h3>
                          <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal '>${item.price}</h4>
                        </div>
                        <h5 className='text-[#767676] font-sans lg:text-[18px] text-[10px] font-normal pb-[10px]'>Available Stock: {item.stock}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {catShow ? catwiseitem.length > 5 &&
              <div className="text-center w-full relative z-30 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:content-[''] after:h-[1px] after:w-full after:bg-[#262626] after:z-20">
                <button onClick={handleShowProduct} className='text-[20px] font-sans relative z-50 border-[1px] rounded-2xl border-[#262626] px-5 py-2 bg-white duration-300 ease-in-out hover:bg-[#262626] hover:text-white'>Show All</button>
              </div>
              :
              <div className="text-center w-full relative z-30 after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:content-[''] after:h-[1px] after:w-full after:bg-[#262626] after:z-20">
                <button onClick={handleHideProduct} className='text-[20px] font-sans relative z-50 border-[1px] rounded-2xl border-[#262626] px-5 py-2 bg-white duration-300 ease-in-out hover:bg-[#262626] hover:text-white'>Hide</button>
              </div>
            }
          </div>
          :
          <div className={`${multilist == "activelist" ? "w-[200%]" : "flex justify-between flex-wrap"}`}>
            {allData.map((item) => (
              <div className="lg:w-[32%] w-[48%] px-0 group mb-[30px]">
                <div className="">
                  <div className="relative overflow-hidden">
                    <Link to={`/shop/${item.id}`}>
                      <img className='w-full lg:h-[250px] h-[170px]' src={item.thumbnail} alt="product_img" />
                    </Link>
                    <h5 className='absolute top-[10px] left-[20px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>{item.discountPercentage}%</h5>
                    <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                        <TfiReload />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center cursor-pointer">
                        <h3 onClick={() => handleAddToCart(item)} className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                        <ToastContainer
                          position="top-center"
                          autoClose={900}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover={false}
                          theme="dark"
                        />
                        <FaShoppingCart />
                      </div>
                    </div>
                  </div>
                  <Link to={`/shop/${item.id}`}>
                    <div className="">
                      <div className="flex justify-between pt-[15px] relative z-20 items-center">
                        <h3 className='font-sans text-[#262626] lg:text-[18px] text-[10px] font-bold'>{item.title}</h3>
                        <h4 className='text-[#767676] font-sans lg:text-[20px] text-[10px] font-normal'>${item.price}</h4>
                      </div>
                      <h5 className='text-[#767676] font-sans lg:text-[18px] text-[10px] font-normal pb-[10px]'>Available Stock: {item.stock}</h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      }
    </>
  )
}

export default Post