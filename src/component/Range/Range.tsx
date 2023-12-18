import { ChangeEvent } from 'react'
import styled from 'styled-components'

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
    <Container>
      <CharLength>
        <CharacterLength>Character Length</CharacterLength>
        <Length>{passwordLength}</Length>
      </CharLength>
      <input type="range" 
              min="0" 
              max="10" 
              id='passwordLength'
              value={passwordLength}
              onChange={handlePasswordLength}/>
    </Container>
  )
}

export default Range

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin-bottom: 1.5rem;

  input[type="range"] {
    -webkit-appearance: none;
    accent-color: white;
    cursor: pointer;
    height: 8px;
    background-color: var(--color-dark);
    background-image: linear-gradient(var(--primary-color), var(--primary-color));
    background-size: 30% 100%;
    background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
}

input[type="range"]:hover::-webkit-slider-thumb {
    background: var(--color-dark);
    border: 2px solid var(--primary-color);
    -webkit-appearance: none;
  }
`
const CharacterLength = styled.p`

`
const CharLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-password);
  margin-block: .5rem;
`
const Length = styled.p`

  color: var(--primary-color);
  font-weight: 500;
  font-size: 1.5rem;
    
    `