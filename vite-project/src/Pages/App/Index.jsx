// HOOKS
import {useRoutes, BrowserRouter} from 'react-router-dom';

import "./App.css";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import NavBar from '../../Components/NavBar/index'

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFound />},
  ])
  return routes
}

const App = () => {
  return (
    <div className="bg-red-100">
      <BrowserRouter>
        <NavBar />
        <AppRoutes />      
      </BrowserRouter>
    </div>
  )
}

export default App