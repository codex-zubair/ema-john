import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='app'>
      {/* Header Section Start */}
      <Header></Header>
      {/* Header Section End */}

      {/* Main Section Start */}
      <Shop></Shop>
      {/* Main Section End */}

    </div>
  );
}

export default App;
