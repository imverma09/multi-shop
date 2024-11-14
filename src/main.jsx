import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import './Component/Css/navbar.css';
import Category from './Component/Category.jsx';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ProductShoes from './Component/products/ProductShoes.jsx';
import Shop from './Component/Shop.jsx';
import ShopDetail from './Component/Shop-Detail/ShopDetail.jsx';
import Card from './Component/Card.jsx';
import InputContextProvider from './Component/context/InputContextProvider.jsx';
import WishlistContextProvider from './Component/context/WishlistContext.jsx';
import AddToCard from './Component/AddToCard.jsx';
import Contact from './Component/Contact.jsx';
import Login from './Component/Login.jsx';
import Singup from './Component/Signup.jsx';
import EmailVerification from './Component/EmailVerification.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "/:cat",
    element:<Category/>
  },
  {
    path: '/products/:id',
    element:<ProductShoes/>
  },
  {
    path : '/Shop',
    element : <Shop/>
  },
  {
    path : "/Shop-Detail/:S",
    element : <ShopDetail/>
  },
  {
    path : "/Card",
    element : <Card/>
  },{
    path : '/AddToCard',
    element : <AddToCard/>
  },{
    path : "/contact",
    element : <Contact/>
  },{
    path : "/login",
    element : <Login/>  
  },{
    path : "/sign",
    element : <Singup/>  
  },{
    path : "/verification",
    element : <EmailVerification/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <InputContextProvider>
    <WishlistContextProvider>
      <RouterProvider router={router} />
    </WishlistContextProvider>
  </InputContextProvider>  
  </>

)
