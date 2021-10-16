import logo from './logo.svg';
import './App.css';
import blue_splash from './blue-splash.png';
import green_splash from './green-splash.png';
import human from './human.png';
import clock from './clock.png';
import chat_bubbles from './chat-bubbles.png';

function App() {
  return (
    <div className="FAQ-page">
      <div className="title-container">
        <p className="title-text">Frequently Asked Questions</p>
        <div className="graphic">
          <img src={blue_splash} id="blue_splash" />
          <img src={green_splash} id="green_splash" />
          <img src={human} id="human" />
          <img src={clock} id="clock" />
          <img src={chat_bubbles} id="chat_bubbles" />
        </div>
      </div>
    </div>
  );
}

export default App;


/**
 * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FAQ page
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */