import { ChangeEvent } from 'react'
import styled from 'styled-components'


type UpperCaseProps = {
  includeUppercase:boolean
  setIncludeUppercase:(include:boolean) => void
}




const IncludeUppercase = ({includeUppercase, setIncludeUppercase}:UpperCaseProps) => {

  const checkedHandledUppercase =(_event:ChangeEvent<HTMLInputElement>) => {
    setIncludeUppercase(!includeUppercase)
  }

  return (
    <Container>
        <UpperCaseContainer>
          <input type="checkbox" 
                id='includeUppercase'
                checked = {includeUppercase}
                onChange={checkedHandledUppercase}/>
          <Label htmlFor="includeUppercase">Include Uppercase Letters</Label>
      </UpperCaseContainer>
    </Container>
    
  )
}

export default IncludeUppercase


const Container = styled.div`
  margin-block:.5rem;
`
const UpperCaseContainer = styled.div`
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
    border: 2px solid var(--color-password);
  }

  input[type='checkbox']:checked {
    background-color: var(--primary-color);
    background-image: url('/src/assets/icon-check.svg');
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid var(--primary-color);
  }
`



const Label = styled.label`
  color: var(--color-password);
`