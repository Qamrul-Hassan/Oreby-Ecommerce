import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { apiData } from './ContextApi'
import { RxCaretRight } from "react-icons/rx";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Post from './pagination/Post';
import PaginationArea from './pagination/PaginationArea';

const Products = () => {
  let data = useContext(apiData)
  let [currentPage, setCurrentpage] = useState(1)
  let [perPage, setPerPage] = useState(15)
  let [catshow, setCatShow] = useState(false)
  let [colshow, setColShow] = useState(false)
  let [brashow, setBraShow] = useState(false)
  let [prishow, setPriShow] = useState(false)
  let [category, setCategory] = useState([])
  let [brand, setBrand] = useState([])
  let [catwiseitem, setCatwiseitem] = useState([])

  
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage

  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []
  
  for(let i= 0; i < Math.ceil(catwiseitem.length > 0 ? catwiseitem : data.length / perPage); i++){
    pageNumber.push(i)
}

  let paginate = (pageNumber) => {
    setCurrentpage(pageNumber + 1);
  }
  
  let prev = () => {
    if (currentPage > 1) {
      setCurrentpage((state) => state - 1)
    }
  }
  
  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentpage((state) => state + 1)
    }
  }
  
  
  useEffect(()=>{
    setCategory([...new Set(data.map((item)=>item.category))])
    setBrand([...new Set(data.map((item)=>item.brand))])
  },[data])
  
  
  let handleCategory = (citem) => {
    let categoryFilter = data.filter((item)=>item.category == citem)
    setCatwiseitem(categoryFilter)
  }
  let handleBrand = (citem) => {
    let brandFilter = data.filter((item)=>item.brand == citem)
    setCatwiseitem(brandFilter)
  }

  let [multilist, setMultiList] = useState("")

  let handleMultilist = () => {
    setMultiList("activelist")
  }

  let [lowPrice, setLowPrice] = useState("")
  let [highPrice, setHighPrice] = useState("")

  let [pricewiseItem, setPricewiseItem] = useState([])

  let handlePriceFilter = (value) => {
    setLowPrice(value.low)
    setHighPrice(value.high)
    let PriceFilter = data.filter((item)=>item.price > value.low && item.price < value.high)
    setPricewiseItem(PriceFilter);
  }
  let handlePriceFilterHigh = (value) => {
    setLowPrice(value.low)
    let PriceFilter = data.filter((item)=>item.price > value.low)
    setPricewiseItem(PriceFilter);
  }

  let handleShownProduct = (e) => {
    setPerPage(e.target.value); 
  }

  let [resPagination, setResPagination] = useState(false)

  useEffect( ()=> {
    if(window.innerWidth > 1024){
      setResPagination(true)
    }else{
      setResPagination(false)
    }
  }, [])

  return (
    <>
      <section className='lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0'>
        <Container>
          <div className="lg:pb-[70px] pb-[10px]">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link> <RxCaretRight /> Products
            </h3>
          </div>
          <div className="lg:flex justify-between">
            <div className="lg:w-[20%] w-[100%]">
              <div className="">
                <h3 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Category <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                {catshow &&
                  <ul className='lg:h-[400px] h-[100px] overflow-y-scroll'>
                    {category.map((item)=>(
                    <li onClick={()=>handleCategory(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>{item}</li>
                    ))}
                  </ul>
                }
              </div>
              <div className="lg:pt-[50px] pt-3">
                <h3 onClick={() => setColShow(!colshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Color <p>{colshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                {colshow &&
                  <ul>
                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-black pl-5'>Color 1</li>
                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#FF8686] pl-5'>Color 2</li>
                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#7ED321] pl-5'>Color 3</li>
                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#B6B6B6] pl-5'>Color 4</li>
                    <li className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#15CBA5] pl-5'>Color 5</li>
                  </ul>
                }
              </div>
              <div className="lg:pt-[50px] pt-3">
                <h3 onClick={() => setBraShow(!brashow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Brand <p>{brashow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                {brashow &&
                  <ul className='lg:h-[400px] h-[100px] overflow-y-scroll'>
                    {brand.map((item)=>(
                    <li onClick={()=>handleBrand(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>{item}</li>
                    ))}
                  </ul>
                }
              </div>
              <div className="lg:pt-[50px] pt-3">
                <h3 onClick={() => setPriShow(!prishow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Price <p>{prishow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
                {prishow &&
                  <ul className=''>
                    <li onClick={()=>handlePriceFilter({low:0.00, high:49.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$0.00 - $49.99</li>
                    <li onClick={()=>handlePriceFilter({low:50.00, high:99.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$50.00 - $99.99</li>
                    <li onClick={()=>handlePriceFilter({low:100.00, high:199.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$100.00 - $199.99</li>
                    <li onClick={()=>handlePriceFilter({low:200.00, high:499.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$200.00 - $499.99</li>
                    <li onClick={()=>handlePriceFilter({low:500.00, high:999.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$500.00 - $999.99</li>
                    <li onClick={()=>handlePriceFilter({low:1000.00, high:4999.99})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$1000.00 - $4999.99</li>
                    <li onClick={()=>handlePriceFilterHigh({low:5000.00})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0]'>$5000.00 - Above</li>
                  </ul>
                }
              </div>
            </div>
            <div className="lg:w-[78%] w-[100%]">
              <div className="lg:flex justify-between lg:pb-[50px] pb-[20px] pt-[10px]">
                <div className="flex gap-x-5 lg:justify-normal justify-center lg:w-[30%] w-100%">
                  <div onClick={()=>setMultiList("")} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] border-2  border-[#737373] text-[20px] ${multilist == "activelist" ? "" : "bg-[#262626] text-white"}`}><PiSquaresFourFill /></div>
                  <div onClick={handleMultilist} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] border-2  border-[#737373] text-[20px] ${multilist == "activelist" ? "bg-[#262626] text-white" : ""}`}><GrSort /></div>
                </div>
                <div className="flex lg:justify-end justify-between lg:gap-x-10 lg:w-[70%] w-[100%] pt-[20px] lg:pt-0">
                  <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Sort by : </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[10px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="">Featured</option>
                      <option value="">Price</option>
                      <option value="">Category</option>
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                    <select onChange={handleShownProduct} name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="15">15</option>
                      <option value="21">21</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
              </div>
              <Flex>
                <div className="">
                  <div className="">
                    <Post allData={allData} catwiseitem={catwiseitem} multilist={multilist} pricewiseItem={pricewiseItem} />
                  </div>
                  <div className="text-start">
                    <PaginationArea pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentPage={currentPage} resPagination={resPagination} />
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Products