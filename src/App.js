import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import { FooterContainer } from './components/FooterContainer/FooterContainer';

function App() {
  return (
    <>
      <Router>
        <NavBar>
          <footer>
            <FooterContainer />
          </footer>
        </NavBar>
      </Router>
    </>
  );
}

export default App;
