import { useState } from 'react'
import { generatePassword } from './utils/GeneratePassword'
import IncludeLowercase from './component/IncludeLowercase/IncludeLowercase'
import IncludeNumbers from './component/IncludeNumbers/IncludeNumbers'
import IncludeSymbols from './component/IncludeSymbols/IncludeSymbols'
import IncludeUppercase from './component/IncludeUppercase/IncludeUppercase'
import Password from './component/Password/Password'
import Range from './component/Range/Range'
import Strength from './component/Strength/Strength'
import styled from 'styled-components'

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
    <Container>
      <Heading>password generator</Heading>
      <Password password ={password}/>

      <GenerateContainer>
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
            passwordLength={passwordLength}
            includeLowercase={includeLowercase}
            includeUppercase= {includeUppercase}
            includeSymbols={includeSymbols}
            includeNumbers={includeNumbers}
                            />
        
        <Wrapper>
          <Button onClick={HandleGeneratePassword} className='generate'>
              <Generate>generate</Generate>
              <Icon className="uil uil-arrow-right"></Icon>
          </Button>
        </Wrapper>
      </GenerateContainer>
    </Container>
  )
}

export default App



const Container = styled.div `
  width: 400px;

  @media (max-width:375px) {
    padding:1.8rem
  }
  @media (max-width:700px) {
    padding:2rem
  }
`

const Heading = styled.h3 `
    color: var(--color-placeholder);
    text-transform: capitalize;
    text-align: center;
`

const Wrapper = styled.div `
  width: 100%;
  margin-block-start: 1rem;
`

const Button = styled.button `
display:flex;
align-items: center;
gap: 2rem;
justify-content: center;
width: 100%;
text-transform: uppercase;
font-weight: 500;
background-color: var(--primary-color);
outline: none;
border: none;
padding: .8rem 1.2rem;
cursor: pointer;

&:hover {
  background-color: var(--color-dark);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}
`

const Generate = styled.span `
  font-weight: 500;
`

const GenerateContainer = styled.div`
  background-color: var(--color-background);
  padding: 1rem 1.5rem;
`

const Icon = styled.i `
font-size: 1rem;
`