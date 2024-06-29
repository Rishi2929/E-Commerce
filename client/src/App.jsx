import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import './App.css'
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
  },
  {
    path: "/login",
    element: <LoginPage> </LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage> </SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage> </CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckOutPage> </CheckOutPage>,
  },
]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
