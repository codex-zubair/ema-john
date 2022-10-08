import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import ManageReview from './components/ManageReview/ManageReview';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Main from './layout/Main/Main';

function App() {

  const router = createBrowserRouter([

    { path: '/', element: <Shop></Shop> },

    {
      path: '/order', element: <Order></Order>
    },
    {
      path: '/order-review', element: <OrderReview></OrderReview>
    },
    {
      path: '/manage-review', element: <ManageReview></ManageReview>
    },

    {
      path: '/login' , element: <Login></Login>
    }





  ]);



  return (
    <div className='app'>

      {/* Main Layout Section Start */}
      <Main></Main>
      {/* Main Layout Section Start */}

      <RouterProvider
        router={router} />
    </div>
  );
}

export default App;
