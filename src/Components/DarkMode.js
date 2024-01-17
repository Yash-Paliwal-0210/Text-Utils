import React,{useState} from 'react'

function DarkMode() {
    const [mystyle,setMyStyle]=useState({color:'white',backgroundColor:'#454545'});
    const [btntext ,setBtnText]=useState("Enable Dark Mode");
     const darkModeTime=()=>{
      if(mystyle.color == 'white'){
        setMyStyle({
          color:'black',
          backgroundColor:'white'
        })
        setBtnText("Enable Light Mode");
      }
      else{
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setBtnText("Enable Dark Mode");
      }
     }
  return (
    <div>
      
    </div>
  )
}
