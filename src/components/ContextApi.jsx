import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let apiData = createContext()


const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([])

  let getData = () => axios.get("https://dummyjson.com/products?&limit=0").then((response) => {
    setInfo(response.data.products);
  })
  useEffect(() => {
    getData()
  }, [])

  return (
    <apiData.Provider value={info}>{children}</apiData.Provider>
  )
}

export { ContextApi, apiData }