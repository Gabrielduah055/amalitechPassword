import React, { ChangeEvent } from 'react'
import './includeUppercase.css'


type UpperCaseProps = {
  includeUppercase:boolean
  setIncludeUppercase:(include:boolean) => void
}




const IncludeUppercase = ({includeUppercase, setIncludeUppercase}:UpperCaseProps) => {

  const checkedHandledUppercase =(event:ChangeEvent<HTMLInputElement>) => {
    setIncludeUppercase(!includeUppercase)
  }

  return (
    <div className='upperCaseContainer'>
      <input type="checkbox" 
             id='includeUppercase'
             checked = {includeUppercase}
             onChange={checkedHandledUppercase}/>
      <label htmlFor="includeUppercase">Include Uppercase Letters</label>
    </div>
  )
}

export default IncludeUppercase
