import './App.css';
import Header from './components/Header';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Birds from './pages/Birds';
import FAQ from './pages/FAQ';
import Consultation from './pages/Consultation';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter basename='/paradigm-pet-professionals'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
