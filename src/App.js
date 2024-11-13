import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <img src="/shecodes/logo.png" class="logo" width="50px" alt="Shecodes logo"/><a href ="/images/logo.png/"target="_blank" rel="noopener noreferrer"/> SheCodes Foundation
        <p>
          Hello World!
        </p>
        <Weather city="New York"/>       
      </header>
    </div>
  );
}

export default App;
