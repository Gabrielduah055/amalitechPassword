import React, { ChangeEvent } from 'react'
import './includeSymbols.css'


type SymbolsProps = {
  includeSymbols:boolean
  setIncludeSymbols:(include:boolean) => void
}

const IncludeSymbols = ({includeSymbols, setIncludeSymbols}:SymbolsProps) => {

  const checkedSymbolHandled= (event:ChangeEvent<HTMLElement>) => {
    setIncludeSymbols(!includeSymbols)

  }
  return (
    <div>
        <div className='upperCaseContainer'>
          <input type="checkbox" 
                  id='includeSymbols'
                  checked = {includeSymbols}
                  onChange={checkedSymbolHandled}/>
          <label htmlFor="">Include Symbols</label>
        </div>
    </div>
  )
}

export default IncludeSymbols
