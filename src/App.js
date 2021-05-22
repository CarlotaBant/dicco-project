import logo from './fox.png';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo 
        img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"><small>Coded by <a href="https://github.com/CarlotaBant">Lota Aya</a></small></footer>
      </div>
    </div>
  );
}

