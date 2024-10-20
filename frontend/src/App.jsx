import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Guide from './pages/Guide';
import Context from './pages/Contact';
import Myprofile from './pages/Myprofile';
import Myappionments from './pages/Myappionments';
import Appionment from './pages/Appionment';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/contact' element={<Context />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appionments' element={<Myappionments />} />
        {/* Corrected spelling: /appointment/:docId */}
        <Route path='/appointment/:docId' element={<Appionment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
