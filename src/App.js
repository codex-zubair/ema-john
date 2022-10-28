import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  // Helmet Context const HelmetProvider = createContext({})
   const helmetContext = {};


  return (
    <HelmetProvider context={helmetContext}>
      <div className='app'>
      <RouterProvider
        router={router} />
    </div>
    </HelmetProvider>
  );
}

export default App;
