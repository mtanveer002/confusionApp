import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="success">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>

      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
