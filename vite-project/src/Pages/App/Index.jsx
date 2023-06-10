// HOOKS
import {useRoutes, BrowserRouter} from 'react-router-dom';

import "./App.css";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFoundignIn from '../NotFound';


const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFoundignIn />},
  ])

  return routes
}

const App = () => {
  return (
    <div className="bg-red-900">
      <BrowserRouter>
        <AppRoutes />      
      </BrowserRouter>
    </div>
  )
}

export default App