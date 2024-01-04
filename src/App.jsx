import './App.css'
import Home from './components/Home/Home'
import logo from "../src/assets/shared/logo.svg";
import openNav from "../src/assets/shared/icon-hamburger.svg";
import closeNav from "../src/assets/shared/icon-close.svg";
import { useState } from 'react';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const urlPaths = ["/", "/home", "/destination", "/crew", "/technology"];
  const [activeUrl, setActiveUrl] = useState(location?.pathname);
  return (
    <div className='app'>
      {(location?.pathname === "/" || location?.pathname === "/home" || location?.pathname === "/destination" || location?.pathname === "/crew" || location?.pathname === "/technology") &&
        <div className='navigation'>
          <div className='home-nav'>
            <div className='nav-logo'>
              <img src={logo} alt="" />
            </div>
            {/* when display size is for pc and tab */}
            <div className='v-bar v-bar-none'>
            </div>
            <div className='nav-link nav-link-none'>
              <p><Link to="/">00 HOME</Link></p>
              <p><Link to="/destination">01 DESTINATION</Link></p>
              <p><Link to="/crew">02 CREW</Link></p>
              <p><Link to="/technology">03 TECHNOLOGY</Link></p>
            </div>

            {/* when display size is for only mobile devices */}
            <div className='mobile-nav mobile-nav-none'>
              {
                !open && <img src={openNav} onClick={() => setOpen(!open)} alt="" />
              }
              {
                open && <img src={closeNav} onClick={() => setOpen(!open)} alt="" />
              }

            </div>
          </div>
          {
            open && <div className='mobile-nav-open mobile-nav-close'>
              <p><Link to="/">00 HOME</Link></p>
              <p><Link to="/destination">01 DESTINATION</Link></p>
              <p><Link to="/crew">02 CREW</Link></p>
              <p><Link to="/technology">03 TECHNOLOGY</Link></p>
            </div>
          }
        </div>
      }
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
