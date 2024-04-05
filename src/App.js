import logo from './logo.svg';
import './App.css';
import Headertop from './components/headertop/Headertop';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';


function App() {
  return (
    <div className="App">
      <Headertop/>
      <Navbar/>
      <Main/>
      <Categories/>
    </div>
  );
}

export default App;
