import React from 'react'
import { useState ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
export default function App() {
  const [second,setSecund] = useState(30)
  const [yellow,setYellow] = useState(true)
  const [red,setRed] = useState(true)
  const [green,setGreen] = useState(true)
  const [value,setValue] = useState(15)
  useEffect(() => {
    const interval = setInterval(() => {
      if(second === 0){
        setSecund(second => 30)
      }
      else if (second > 15 && second < 20){
        setRed(red => false)
        setYellow(yellow => false)
        setSecund(second => second - 1);
      }
    else if (second > 16 ){
      setRed(red => false)
      setYellow(yellow => true)
      setGreen(green => true)
      setSecund(second => second - 1);
      
    }
    else if (second < 3 && second > 0 ){
      setYellow(yellow => false)
      setGreen(green => false)
      setSecund(second => second - 1);
    }
    else if (second < 16 ){
      setRed(red => true)
      setGreen(green => false)
      setYellow(yellow => true)
      setSecund(second => second - 1);
    }
      else{      
        setSecund(second => second - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(()=>{
    const setTime =  setInterval(() => {
      if(value === 0){
        setValue(value => 15)
      }
      else{
        setValue(value => value -1)
      }
    },1000)
    return () => clearInterval(setTime);
  })
  return (
  <div className="container">
    <div className="lights">
    {
     red ?
      <div className=" yellow  text-success bg-secondary pt-2  rounded rounded-circle text-center mx-auto " style={{width:90,height:90}}>
          <p className='mt-4 '>{value}</p>
      </div>
      :
      <div className="red "></div>
      }
     
      {
     yellow ?
      <div className=" yellow  text-success bg-secondary pt-2  rounded rounded-circle text-center mx-auto " style={{width:90,height:90}}>
          <p className='mt-4 '></p>
      </div>
      :
      <div className='yellow'></div>
      }
      {
     green ?
      <div className=" yellow  text-success bg-secondary pt-2  rounded rounded-circle text-center mx-auto " style={{width:90,height:90}}>
          <p className='mt-4 '>{second - 15}</p>
      </div>
      :
      
      <div className="green">
      </div>
      }
      </div>
      <div className="inside">
      </div>
      <div className="under"></div>
    </div>
  )
}

