import { useState } from 'react'
import './App.css'
import { generatePassword } from './utils/GeneratePassword'
import IncludeLowercase from './component/IncludeLowercase/IncludeLowercase'
import IncludeNumbers from './component/IncludeNumbers/IncludeNumbers'
import IncludeSymbols from './component/IncludeSymbols/IncludeSymbols'
import IncludeUppercase from './component/IncludeUppercase/IncludeUppercase'
import Password from './component/Password/Password'
import Range from './component/Range/Range'
import Strength from './component/Strength/Strength'

function App() {
  const [password, setPassword] = useState<String | null>(null)
  const [passwordLength, setPasswordLength] = useState<number>(3) 
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)




  const HandleGeneratePassword = () => {
    const newPassword = generatePassword({
      length:passwordLength,
      includeLowercase, 
      includeUppercase, 
      includeNumbers, 
      includeSymbols
    });
    
    setPassword(newPassword)
    
  }
  return (
    <div className='container'>
      <h3>password generator</h3>
      <Password password ={password}/>

      <div className="generate-container">
        <Range
          passwordLength={passwordLength} 
          setPasswordLength= {setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase = {includeUppercase}
          setIncludeUppercase = {setIncludeUppercase}/>
        <IncludeLowercase
          includeLowercase = {includeLowercase}
          setIncludeLowercase = {setIncludeLowercase}/>
        <IncludeNumbers
          includeNumbers = {includeNumbers}
          setIncludeNumbers = {setIncludeNumbers}/>
        <IncludeSymbols
          includeSymbols = {includeSymbols}
          setIncludeSymbols = {setIncludeSymbols}/>
          <Strength 
            passwordLength={passwordLength}/>
        
        <div className='buttonContainer'>
          <button onClick={HandleGeneratePassword} className='generate'>
              <span>generate</span>
              <i className="uil uil-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
