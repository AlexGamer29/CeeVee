import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home/Home';
import CV from './pages/CV/CV';
import NavBar from './components/NavBar/NavBar';
import { FooterContainer } from './components/FooterContainer/FooterContainer';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <CV /> */}

        <NavBar>
          <footer>
            <FooterContainer />
          </footer>
        </NavBar>
    </>
  );
}

export default App;
