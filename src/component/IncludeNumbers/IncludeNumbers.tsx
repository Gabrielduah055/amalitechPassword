import { ChangeEvent } from 'react'
import './includeNumbers.css'
import styled from 'styled-components'

type NumbersProps = {
  includeNumbers:boolean
  setIncludeNumbers:(include:boolean) => void
}


const IncludeNumbers = ({includeNumbers, setIncludeNumbers}:NumbersProps) => {
 
  const checkedHandledNumbers=(_event:ChangeEvent<HTMLElement>) => {
    setIncludeNumbers(!includeNumbers)
  }

  return (
    <Container>
      <NumbersContainer>
        <input type="checkbox" 
                id='includeNumbers'
                checked = {includeNumbers}
                onChange = {checkedHandledNumbers}/>
        <Label htmlFor="">Include Numbers</Label>
      </NumbersContainer>
    </Container>
  )
}

export default IncludeNumbers


const Container = styled.div`
  margin-block:.5rem;
`
const NumbersContainer = styled.div`
  display: flex;
  gap: .5rem;
  margin-block: .6rem

  input {
    outline: none;
    border: none;
    background-color: var(--primary-color);
    cursor: pointer;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: var(--color-dark);
    cursor: pointer;
    border: 2px solid var(--primary-color);
  }

  input[type='checkbox']:checked {
    background-color: var(--primary-color);
    background-image: url('/src/assets/icon-check.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
`



const Label = styled.label`
  color: var(--color-password);
`