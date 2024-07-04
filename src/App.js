import './App.css';

import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import AboutUs from './components/AboutUs';

//rfc

//https://www.npmjs.com/package/react-top-loading-bar

export default function App() {
  const pageSize = 18;
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#caf0f8' : '#05081c';
  }, [mode]);
  


  const toggleMode= ()=>{
    if(mode==='light'){ //agar mode light hai to usse dark karo aur background bhi dark karo
      setMode('dark');
      document.body.style.backgroundColor= '#05081c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= '#caf0f8';
    }
  }


  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          color='blue'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route exact path="/" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/aboutUs" element={<AboutUs mode={mode}/>} />

          {/*It's important to write "exact path" instead of "path" else it will not upload or tell to App.
              We will also write key="something" so that we can forcefully tell the router to get updated*/}
        </Routes>
      </Router>
    </div>
  )
}


