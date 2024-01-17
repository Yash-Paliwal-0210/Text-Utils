
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import AOS from "aos";
import { useState } from 'react';
function App() {

  const [mode,setMode]=useState('dark');
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  useEffect(()=>{
    AOS.init();
  },[]);
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <TextForm/>
   <Footer/>
   </>
  );
}

export default App;
