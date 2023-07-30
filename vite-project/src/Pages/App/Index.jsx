// HOOKS
import {useRoutes, BrowserRouter} from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';

import "./App.css";
import Home from '../Home/index.jsx';
import MyAccount from '../MyAccount/Index.jsx';
import MyOrder from '../MyOrder/Index.jsx';
import MyOrders from '../MyOrders/Index.jsx';
import SignIn from '../SignIn/Index.jsx';
import NotFound from '../NotFound/Index.jsx';
import NavBar from '../../Components/NavBar/index.jsx'
import CheckoutSiteMenu from '../../Components/CheckoutSiteMenu/index.jsx';

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/Shoes', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/all', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFound />},
  ])
  return routes
}

const App = () => {
  return (
    <div className="">
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />      
          <CheckoutSiteMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  )
}

export default App