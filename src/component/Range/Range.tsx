import React, { ChangeEvent } from 'react'
import './range.css'


type PasswordLengthProps = {
  passwordLength:number
  setPasswordLength:(length:number) => void
}

const Range = ({passwordLength, setPasswordLength} :PasswordLengthProps)  => {

  
  //creating the function for the onchange method
  const handlePasswordLength= (event:ChangeEvent<HTMLInputElement>) =>{
    const value = (parseInt(event.target.value, 10))
    setPasswordLength(value)

    const target = event.target as HTMLInputElement
    const min = parseFloat(target.min);
    const max = parseFloat(target.max);
    const val = parseFloat(target.value)


    const backgroudSize = `${((val - min) * 100)/ (max - min)}% 100%`
    target.style.backgroundSize = backgroudSize

    
  }

  
  return (
    <div className='rangeContainer'>
      <div className="charLength">
        <p>Character Length</p>
        <p className='length'>{passwordLength}</p>
      </div>
      <input type="range" 
              min="0" 
              max="10" 
              id='passwordLength'
              value={passwordLength}
              onChange={handlePasswordLength}/>
    </div>
  )
}

export default Range
