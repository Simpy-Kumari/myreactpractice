import logo from './logo.svg';
import './App.css';
import Button from './Button';
import MyForm from './MyForm'
import Car from './Car';
import Garage from './Garage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
        <MyForm/>
        <Garage />
      </header>
    </div>
  );
}

export default App;
