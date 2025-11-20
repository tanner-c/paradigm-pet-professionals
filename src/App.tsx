import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
