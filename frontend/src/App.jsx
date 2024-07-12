import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <>
      {/* <Header/> */}
      Header
      <div className="row">
        <div className='col-md-2'>
          NavBar
          {/* <NavBar/> */}
        </div>
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {/* <Link to="/">Home</Link> */}
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App