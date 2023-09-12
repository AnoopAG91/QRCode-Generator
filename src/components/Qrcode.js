import React, { useState } from 'react'
import QRCode from 'qrcode.react';
import './Qrcode.css'
import {IoIosRadioButtonOn} from 'react-icons/io'

function Qrcode() {
    const [text, setText] = useState("")   // this state is for handling input data
    const[generateQr, setGenerateQr] = useState("")  // this state is for generate button
    
    const [color, setColor] = useState('black')   // state for QRcode color

    function handleBtn(){     // handling the button for generating QRcode
       setGenerateQr(text)
       setText("")
    }

    function handleColor(color){    // handling the QRcode color changer
        setColor(color)
    }
  return (
    <div className='wrapper'>
        <h1>Generate Your QRCode</h1>
       
        <div className='input-section'>
            <input type='text' placeholder='Enter Url' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleBtn}>Generate</button> 
        </div>
       
        <div className='qrcode-section'>
        <QRCode value={generateQr} fgColor={color} renderAs="canvas" size={250} />
        </div>

        <div className='bottom-section'>
            <div className='color-changer'>
                <IoIosRadioButtonOn  onClick={()=>handleColor('red')} style={{color:"red", cursor:"pointer"}}/>
                <IoIosRadioButtonOn onClick={()=>handleColor('green')} style={{color:"green", cursor:"pointer"}}/>
                <IoIosRadioButtonOn onClick={()=>handleColor('orange')} style={{color:"orange", cursor:"pointer"}}/>
                <IoIosRadioButtonOn onClick={()=>handleColor('blue')} style={{color:"blue", cursor:"pointer"}}/>
            </div>
        </div>
    </div>
  )
}

export default Qrcode