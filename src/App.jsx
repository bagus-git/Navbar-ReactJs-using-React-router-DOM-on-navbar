import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavbarComponent from './components/NavbarComponent';
import Notfound from './pages/Notfound';
import Projectweb from './pages/project/ProjectWeb';
import Projectmobile from './pages/project/ProjectMobile';
import Projectother from './pages/project/ProjectOther';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projectWeb" element={<Projectweb />}></Route>
        <Route path="/projectMobile" element={<Projectmobile />}></Route>
        <Route path="/projectOther" element={<Projectother />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
