import Header from './components/Header';
import Footer from './components/Footer';
import RouteList from './routes';
import TopArrow from './components/TopArrow';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <Header id="header" />
        <RouteList />
        <TopArrow />
        <Footer id="footer" />
      </Router >
    </div>
  );
}

export default App;