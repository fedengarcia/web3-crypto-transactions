import {Navbar, Home, Services, Transactions} from './components';

const  App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-home">
          <Navbar/>
          <Home/>
      </div>
      <h1 className="text-5x2 font-bold">
  </h1>
      <Services/>
      <Transactions/>
    </div>
  );
}

export default App;
