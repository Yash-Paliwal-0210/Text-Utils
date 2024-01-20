import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import AOS from "aos";
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('dark');
  const [mode3, setMode3] = useState('light');
  const [mode2, setMode2] = useState('dark');
  const [imageSrc, setImageSrc] = useState('moon.png');
  
  const toggleMode = () => {
    if (mode === 'light' && mode1 === 'dark') {
      setMode('dark');
      setMode1('light');
      setMode3('dark');
      setMode2('light');
      setImageSrc('sunny.png');
    }

    else {
      setMode('light');
      setMode1('dark');
      setMode3('light');
      setMode2('dark');
      setImageSrc('moon.png');

    }

  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mode1={mode1} imageSrc={imageSrc}/>
      <TextForm mode={mode} mode1={mode1} mode3={mode3} mode2={mode2} />
      <Footer mode={mode} mode1={mode1} />
    </>
  );
}

export default App;
