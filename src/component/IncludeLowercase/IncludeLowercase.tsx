
import { ChangeEvent } from 'react'
import styled from 'styled-components'



type LowerCaseProps = {
  includeLowercase:boolean
  setIncludeLowercase:(include:boolean) => void
}

const IncludeLowercase = ({includeLowercase, setIncludeLowercase}:LowerCaseProps) => {
  const checkedHandledLowercase =(_event:ChangeEvent<HTMLInputElement>) =>{
    setIncludeLowercase(!includeLowercase)
  }

  return (
    <Container>
      <UpperCaseContainer>
        <input type="checkbox" 
                id='includeLowercase'
                checked={includeLowercase}
                onChange={checkedHandledLowercase}/>
        <Label htmlFor="">Include Lowercase Letters</Label>
    </UpperCaseContainer>
    </Container>
  )
}

export default IncludeLowercase


const Container = styled.div`

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
    border: 2px solid var(--primary);
  }
`



const Label = styled.label`
  color: var(--color-password);
`