import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayOut from "./components/RootLayOut"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import ErrorPage from "./Pages/ErrorPage"
import { ClockLoader } from "react-spinners"
import Checkout from "./Pages/Checkout"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import MyAccount from "./Pages/MyAccount"

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
