import logo from '../../logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BIENVENIDO A NICOKCC BLOG
        </p>
        <a
          className="App-link"
          href="https://instagram.com/kevin.nicoolas"
          target="_blank"
          rel="noopener noreferrer"
        >LINK A INCIO</a>
      </header>
    </div>
  );
}