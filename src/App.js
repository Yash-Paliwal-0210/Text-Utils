
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import AOS from "aos";
import { useState } from 'react';
function App() {

  const [mode,setMode]=useState('light');
  const [mode1,setMode1]=useState('dark');

  // const [mode2,setMode2]=useState('dark');
  
  
  const toggleMode =()=>{
    if(mode === 'light' && mode1==='dark'){
      setMode('dark');
      setMode1('light');
    }
    else{
      setMode('light');  
      setMode1('dark');
    }
  }
  



  useEffect(()=>{
    AOS.init();
  },[]);
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mode1={mode1}/>
   <TextForm mode={mode} mode1={mode1}/>
   <Footer mode={mode} mode1={mode1}/>
   </>
  );
}

export default App;
