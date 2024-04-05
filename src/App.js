// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const[text, setText]=useState('dark');
  const[alert, setAlert]=useState(null);

  const changeAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  };
  const togglemode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      setText('dark')
      document.body.style.backgroundColor='white';
      changeAlert('Light Mode Enabled',"success")
    }
    else{
      setMode('dark');
      setText('light')
      document.body.style.backgroundColor='#6c757d';
      changeAlert('Dark Mode Enabled',"success")
    }
  }
  return (
    <>
    {/* <Router> */}
<Alert alert={alert}></Alert>
<Navbar title='TextUtils' aboutText="About" mode={mode} text={text}togglemode={togglemode}></Navbar>
<div className="container my-3">
{/* <About></About> */}
{/* <Routes> */}
 {/* <Route path="/about">
  <About />
 </Route> */}
 {/* <Route exact path="/" element={ <TextForm heading="Enter Your Text" mode={mode}></TextForm>} /> */}
 {/* <Route exact path="/about" element={<About />} /> */}
 {/* </Routes> */}
 <TextForm heading="Enter Your Text" mode={mode}></TextForm>

</div>
{/* </Router> */}
    </>
  );
}

export default App;
