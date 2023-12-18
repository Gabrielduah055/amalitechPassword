import React, { ChangeEvent } from 'react'
import './includeNumbers.css'

type NumbersProps = {
  includeNumbers:boolean
  setIncludeNumbers:(include:boolean) => void
}


const IncludeNumbers = ({includeNumbers, setIncludeNumbers}:NumbersProps) => {
 
  const checkedHandledNumbers=(event:ChangeEvent<HTMLElement>) => {
    setIncludeNumbers(!includeNumbers)
  }

  return (
    <div>
      <div className='upperCaseContainer'>
        <input type="checkbox" 
                id='includeNumbers'
                checked = {includeNumbers}
                onChange = {checkedHandledNumbers}/>
        <label htmlFor="">Include Numbers</label>
      </div>
    </div>
  )
}

export default IncludeNumbers
