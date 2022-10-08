import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import About from './components/About/About';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './layout/Main/Main';
import Inventory from './components/Inventory/Inventory';

function App() {

  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, children: [

        {
          path: '/', element: <Shop></Shop>, loader: async () => {
            return fetch('products.json');
          }
        },
        {
          path: '/order', element: <Order></Order>, loader: async () => {
            return fetch('products.json');
          }
        },

        {
          path: '/inventory', element: <Inventory></Inventory>
        },
        {
          path: '/about', element: <About></About>
        },

        {
          path: '/login', element: <Login></Login>
        }
      ]
    }







  ]);



  return (
    <div className='app'>
      <RouterProvider
        router={router} />
    </div>
  );
}

export default App;
