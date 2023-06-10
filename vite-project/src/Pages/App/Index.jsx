import "./App.css";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFoundignIn from '../NotFound';

const App = () => {
  return (
    <div className="bg-red-900">
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
      <NotFoundignIn />
    </div>
  )
}

export default App