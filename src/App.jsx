import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteList from './routes';
import TopArrow from './components/TopArrow';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header id="header" />
        <RouteList />
        <TopArrow />
        <Footer id="about" />
      </Router >
    </div>
  );
}

export default App;