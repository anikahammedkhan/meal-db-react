import './App.css';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
      <Meals></Meals>
    </div>
  );
}

export default App;
