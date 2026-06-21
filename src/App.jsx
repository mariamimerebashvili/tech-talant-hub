import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Users from './pages/Users';
import RequestDemo from './pages/RequestDemo';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experts" element={<Users />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
