import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Order from "../components/Order/Order";
import Shop from "../components/Shop/Shop";
import Main from "../layout/Main/Main";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

 export const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, children: [

        {
          path: '/', element: <Shop></Shop>, loader: async () => {
            return fetch('https://ema-john-server-olive.vercel.app/products');
          }
        },
        {
          path: '/order', element: <Order></Order>, loader: async () => {
            return fetch('https://ema-john-server-olive.vercel.app/products');
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
        },
        {
          path: '/register', element: <Register></Register>
        }
      ]
    }


  ]);
