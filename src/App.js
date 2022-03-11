import './App.css';
import CarDetail from './component/CarList';
import FilterPanel from './component/FilterPanel';

function App() {
  return (
    <div className="App b">
      {/* <header>
        <img src='https://auto1-js-task-api--mufasa71.repl.co/images/logo.png' alt="logo" />
     
       </header>
       <CarDetail></CarDetail>
    
       <footer>© AUTO1 Group 2018</footer> */}
       <div className='r header'> <img src='https://auto1-js-task-api--mufasa71.repl.co/images/logo.png' alt="logo" /><div className='nav'><a href="#">Sell</a><a href="#">My Orders</a><a href="#">Purchase</a></div></div>
       <div className='content'><div className='leftside'><FilterPanel></FilterPanel></div><div className='rightside'><CarDetail></CarDetail></div></div>
       <div className='r footer'>footer</div>
    </div>
  );
}

export default App;
