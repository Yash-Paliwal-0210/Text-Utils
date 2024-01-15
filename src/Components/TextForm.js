import { configure } from '@testing-library/react';
import React,{useState} from 'react'

export default function TextForm() {
    const [text,setText]=useState('');
    const [text1,setText1]=useState('');
    const [closeModal,setcloseModal] = useState(false);
    const [customStyle,setCustomStyle]=useState({});
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
    const handleOnChange1 =(event) =>{
        setText1(event.target.value)
    }
    const handleUpClick =() =>{
        const newtext=text1.toUpperCase();
        setText1(newtext);
    }
    const handleLowClick =() =>{
        const newtext=text1.toLowerCase();
        setText1(newtext);
    }
    const removeSpaces =() =>{
        const newtext=text1.replaceAll(" ",'');
        setText1(newtext);
    }

    const alphaCount =()=>{
        let a=0;
        for (let i=0;i<text.length ; i++) {
            if ((text[i]>='a' &&  text[i]<='z') || (text[i]>='A' &&  text[i]<='Z'))
            {
                a++;
            }
        }
        return a;
    }
    const wordCount =()=>{
        return text.split(' ').filter(function(n) { return n != '' }).length;
    }
    const removeExtraSpaces =()=>{
        setText1(text1.replace(/\s+/g,' '));
        setCustomStyle({})  ;
    }
    const bold =()=>{
        setText1(text);
        setCustomStyle({fontWeight: 'bold',});    
    }
    const talic = () =>{
        setText1(text);
        setCustomStyle({ fontStyle: 'italic',})
      }
      const sentenceCase = () =>{
        let array = text1.split(".");
        array = array.map(element => element.charAt(0).toUpperCase() + element.slice(1));
        setText1(array.join("."));
        setCustomStyle({});
      }

      const removePunc = () =>{
        setText1(text1.replace(/[.,\/#!$%^@&*;:{}=\-_`~()?"'<>]/g, ''));
      }

      const underline = () =>{
        setText1(text1);
        setCustomStyle({textDecoration: 'underline',})
      }

      const Strikethrough = () =>{
        setText1(text1);
        setCustomStyle({textDecoration: 'line-through',})
      }
      const copyText = () =>{
         const newtext= text;
         setText1(newtext);
      }

  return (
    <>
    <div className="last bg-yellow-200">
    <div className="lower bg-yellow-200  py-10 w-full p-5 justify-around flex  flex-wrap sm:gap-7 min-[260px]:gap-7">
        <div className="txt1">
             <textarea name="" id="" cols="70" rows="13" placeholder='Input text here..' className='bg-yellow-100 text-black rounded-lg w-full'  value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="txt2">
             <textarea name="" id="" cols="70" rows="13" placeholder='Output text here..' className='bg-yellow-100 text-black rounded-lg w-full' value={text1} style={customStyle}  onChange={handleOnChange1}></textarea>
        </div>
    
        </div>
        <div className=" py-8 flex flex-wrap justify-around w-full h-auto min-[270px]:w-450px sm:w-full lg:w-54/100 lg:px-28  ">
             <button className='btn btn-primary mx-3 my-3' onClick={handleUpClick} >Uppercase</button>
             <button className='btn btn-danger mx-3 my-3'  >Number of Alphabets : {alphaCount()} | Number of Words : {wordCount()} </button>
             <button className='btn btn-primary mx-3 my-3'  onClick={removeExtraSpaces} >Remove Extra Spaces</button>
             <button className='btn btn-danger mx-3 my-3'  onClick={handleLowClick}>Lowercase</button>
             <button className='btn btn-primary mx-3 my-3' onClick={removeSpaces}>Remove Spaces</button>
             <button className='btn btn-dark mx-3 my-3' onClick={bold}>Bold</button>
             <button className='btn btn-success mx-3 my-3'  onClick={underline}>Underline</button>
             <button className='btn btn-dark mx-3 my-3'  onClick={removePunc}>Remove Punctuation</button>
             <button className='btn btn-success mx-3 my-3' onClick={copyText}>Copy Text</button>
             <button className='btn btn-dark mx-3 my-3'  onClick={talic}>Italic</button>
             <button className='btn btn-success mx-3 my-3'  onClick={sentenceCase}>Sentence Case</button>
             <button className='btn btn-dark mx-3 my-3' onClick={Strikethrough}>Strikethrough</button>
             <button className='btn btn-warning mx-3 my-3'  onClick={()=>{setText1(text.replace(/[[\]{}()]/g,''));}}>Remove Brackets</button>
             <button className='btn btn-primary mx-3 my-3'onClick={()=>{setText1(text.replace(/[ ]/g,'😍'))}}>Emoji</button>
             <button className='btn btn-warning mx-3 my-3' onClick={()=>{setText("")}} >Clear Text</button>
             <button className='btn btn-primary mx-3 my-3' >Can Be Read in {0.008 * text.split(" ").length} minutes</button>
             </div>
   
   
    </div>
    
    </>
  )
}
