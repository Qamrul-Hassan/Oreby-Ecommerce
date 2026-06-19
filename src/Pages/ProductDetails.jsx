import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaStar } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/ProductSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const [singleData, setSingleData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => setSingleData(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, Qty: 1 }));
    toast.success('Added to cart successfully');
  };

  if (!singleData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="py-10 px-1 lg:px-0">
      <Container>
        <Flex className="flex-wrap justify-between items-start">
          {/* Left Side - Product Images */}
          <div className="lg:w-[48%] w-full">
            <img
              src={singleData?.images?.[0]}
              className="w-full lg:h-[450px] h-[250px] object-cover"
              alt={singleData.title}
            />
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {singleData?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className="w-[60px] h-[60px] object-cover border cursor-pointer hover:border-black"
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:w-[48%] w-full">
            <h3 className="font-sans font-bold text-[39px] text-[#262626] pt-[30px] pb-[18px]">
              {singleData.title}
            </h3>

            {/* Rating and Review */}
            <div className="flex items-center gap-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < singleData.rating ? "text-[#FFD881]" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-[14px] text-[#767676]">{singleData.rating} Review(s)</p>
            </div>

            {/* Price */}
            <h4 className="font-bold text-[20px] text-[#262626] py-[18px] border-b border-[#F0F0F0]">
              ${singleData.price}
            </h4>

            {/* Colors */}
            <div className="flex gap-x-6 py-6 items-center">
              <h3 className="font-bold text-[16px] uppercase">Color:</h3>
              <div className="flex gap-x-3">
                {["#767676", "#FF8686", "#7ED321", "#B6B6B6", "#15CBA5"].map((color, index) => (
                  <div key={index} className="h-[30px] w-[30px] rounded-full" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex gap-x-6 py-6 items-center">
              <h3 className="font-bold text-[16px] uppercase">Size:</h3>
              <select className="border border-[#F0F0F0] py-2 px-2 w-[150px]">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Stock */}
            <div className="py-6 border-b border-[#F0F0F0]">
              <h3 className="font-bold text-[16px] uppercase">Stock:</h3>
              <p>{singleData.stock}</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-x-6 items-center py-6 border-b border-[#F0F0F0]">
              <button className="font-bold text-[14px] h-[60px] w-[200px] border-2 border-[#262626] hover:bg-[#000] hover:text-white">
                Add to Wish List
              </button>
              <button 
                onClick={() => handleAddToCart(singleData)} 
                className="font-bold text-[14px] h-[60px] w-[200px] border-2 border-[#262626] hover:bg-[#000] hover:text-white"
              >
                Add to Cart
              </button>
              <ToastContainer position="top-center" autoClose={900} theme="dark" />
            </div>

            {/* Accordion Section */}
            <div className="py-6 border-b border-[#F0F0F0]">
              <Accordion collapseAll className="!border-none lg:w-[750px] w-full">
                <Accordion.Panel>
                  <Accordion.Title className="py-5 border-t-2 px-2 font-bold text-[14px]">
                    FEATURES & DETAILS
                  </Accordion.Title>
                  <Accordion.Content className="py-3 px-2">
                    <p className="mb-2 text-[#767676]">{singleData.description}</p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="py-5 border-t-2 px-2 font-bold text-[14px]">
                    SHIPPING & RETURNS
                  </Accordion.Title>
                  <Accordion.Content className="py-3 px-2">
                    <p className="mb-2 text-[#767676]">Returns available within 30 days.</p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ProductDetails;
