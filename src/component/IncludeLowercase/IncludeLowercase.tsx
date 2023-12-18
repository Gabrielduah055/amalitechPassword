
import React, { ChangeEvent } from 'react'
import './includeLowercase.css'



type LowerCaseProps = {
  includeLowercase:boolean
  setIncludeLowercase:(include:boolean) => void
}

const IncludeLowercase = ({includeLowercase, setIncludeLowercase}:LowerCaseProps) => {
  const checkedHandledLowercase =(event:ChangeEvent<HTMLInputElement>) =>{
    setIncludeLowercase(!includeLowercase)
  }

  return (
    <div>
      <div className='upperCaseContainer'>
        <input type="checkbox" 
                id='includeLowercase'
                checked={includeLowercase}
                onChange={checkedHandledLowercase}/>
        <label htmlFor="">Include Lowercase Letters</label>
    </div>
    </div>
  )
}

export default IncludeLowercase
