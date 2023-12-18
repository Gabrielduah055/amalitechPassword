import { ChangeEvent } from 'react'
import styled from 'styled-components'


type SymbolsProps = {
  includeSymbols:boolean
  setIncludeSymbols:(include:boolean) => void
}

const IncludeSymbols = ({includeSymbols, setIncludeSymbols}:SymbolsProps) => {

  const checkedSymbolHandled= (_event :ChangeEvent<HTMLElement>) => {
    setIncludeSymbols(!includeSymbols)

  }
  return (
    <Container>
        <SymbolContainer>
          <input type="checkbox" 
                  id='includeSymbols'
                  checked = {includeSymbols}
                  onChange={checkedSymbolHandled}/>
          <Label htmlFor="">Include Symbols</Label>
        </SymbolContainer>
    </Container>
  )
}

export default IncludeSymbols


const Container = styled.div`
  margin-block:.5rem;
`
const SymbolContainer = styled.div`
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