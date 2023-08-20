import './App.css';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

const App = (props) => {
  
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News category={"general"}/>}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/general" element={<News key="general" category={"general"}/>}/>
            <Route exact path="/business" element={<News key="business" category={"business"}/>}/>
            <Route exact path="/sports" element={<News key="sports" category={"sports"}/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" category={"entertainment"}/>}/>
            <Route exact path="/science" element={<News key="science" category={"science"}/>}/>
            <Route exact path="/health" element={<News key="health" category={"health"}/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
