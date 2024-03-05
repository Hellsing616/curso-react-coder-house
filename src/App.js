import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/button';
import { NavBar } from './components/navbar/navbar';

function App() {
  return (
    <div className='container'>
      <h1>Sua loja de e-commerci na sua mão!</h1>
      <hr/>
      <NavBar></NavBar>
      <hr/>
      <Button></Button>
    </div>
  );
}

export default App;
