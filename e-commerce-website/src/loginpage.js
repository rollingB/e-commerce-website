import logo from './logo.svg';
import './App.css';

function Loginpage() {
  return (
    <div className="Log-in">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Pleae log-in with your credentials.
        </p>
        <form >
          <label class="block">
            Name:
            <input type="text" name="name"/>
          </label>
            <br/>
           <label>
             Password:
             <input type="text" name="password"/>
           </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SUCK
        </a>
      </header>
    </div>
  );
}

export default Loginpage;
