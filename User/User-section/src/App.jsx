import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from "react-router-dom";

//Layout
import RootLayout from "./Layouts/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import AddToCart from "./Pages/AddToCart.jsx";
import AddToFavorite from "./Pages/AddToFavorite.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Detail from "./Pages/Detail.jsx";
import Bycategory from "./Pages/Bycategory.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Add-to-cart" element={<AddToCart />} />
      <Route path="Add-to-favorite" element={<AddToFavorite />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Detail/:id" element={<Detail />} />
      <Route path="category/:category" element={<Bycategory />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}