import styled from 'styled-components'


interface PasswordProps {
  password:String | null
}




const Password = ({password}:PasswordProps) => {
  const preDefine = 'gabbyDuah055$'

  const copyToClipboard =() => {
    const content = (password || preDefine ).toString();
    navigator.clipboard.writeText(content)
    .then(() => {
      alert( content)
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
          <Icon className="uil uil-copy" onClick={copyToClipboard}></Icon>
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