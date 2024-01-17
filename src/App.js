
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import AOS from "aos";
function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
   <>
   <Navbar title="TextUtils"/>
   <TextForm/>
   <Footer/>
   </>
  );
}

export default App;
