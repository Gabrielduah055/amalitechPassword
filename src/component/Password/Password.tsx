import styled from 'styled-components'
import { useState } from 'react'


interface PasswordProps {
  password:String | null
}




const Password = ({password}:PasswordProps) => {
  const preDefine = 'P4$5W0rD!'
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard =() => {
    const content = (password || preDefine ).toString();
    navigator.clipboard.writeText(content)
    .then(() => {
      setIsCopied(true);
      
    })
    .catch  ((error) => {
      alert( error)
    })
  }

  return (
    <Container>
        <PasswordGenerate>
          <PasswordText
            style={{color:password ? '#E6E5EA' : '#817D92'}}>{password ? password : preDefine}</PasswordText>
            <Copied>
              <Copy style={{visibility:isCopied ? 'visible' : 'hidden'}}>
                Copied
              </Copy>
              <Icon className="uil uil-copy" onClick={copyToClipboard}></Icon>
            </Copied>
          
        </PasswordGenerate>
    </Container>
  )
}

export default Password


const Container = styled.div`
  width: 100%;
  background-color: var(--color-background);
  margin-block: 1rem;
`
const PasswordGenerate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`
const PasswordText = styled.p`
  color: var(--color-password);
  font-weight: 500;
  font-size: 1.5rem;
`
const Icon = styled.i`
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;

  &:hover {
    color: var(--color-password);
  }
`

const Copied = styled.div`
  display:flex;
  align-items:center;
  gap:.5rem
`
const Copy = styled.p`
  color:var(--color-password);
  font-wieght:600;
  font-size:.8rem;
  visibility:hidden;
  color:var(--primary-color)
`