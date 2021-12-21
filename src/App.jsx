import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteList from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header id="header" />
        {/*       <main id="start">
        <Banner />
      </main>
      <section id="projects">
        {windowWidth > 700 ? (<GridCarousel projects={arrayData} show={3.5} />) : (<GridCarousel id="carousel" projects={arrayData} show={1} />)}
      </section>
      <section id="habilities">
        <Habilities />
      </section> */}
        <RouteList />
        <Footer id="about" />
      </Router >
    </div>
  );
}

export default App;