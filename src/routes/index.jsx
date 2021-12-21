import { Routes, Route } from 'react-router-dom';
import { GridCarousel } from '../components/Carousel';
import Footer from '../components/Footer';
import { Habilities } from '../components/Habilities';

import Home from '../pages/Home';

const RouteList = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/projects" element={<GridCarousel />} />
    <Route path="/habilities" element={<Habilities />} />
    <Route path="/contact" element={<Footer />} />
  </Routes>
);

export default RouteList;