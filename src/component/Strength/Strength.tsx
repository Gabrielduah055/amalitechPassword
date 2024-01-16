import { useEffect, useState } from 'react'
import styled from 'styled-components'


type StrenthProps = {
    passwordLength:number;
    includeUppercase:boolean;
    includeLowercase:boolean;
    includeNumbers:boolean;
    includeSymbols:boolean;
}



const Strength = ({passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase}:StrenthProps) => {
 
   const [strenth, setStrenght] = useState<string>('Very Weak')


   useEffect(() => {

    

    if(passwordLength >= 8 && passwordLength <= 10) {
      const checkBoxes = [includeLowercase, includeNumbers, includeSymbols, includeUppercase];
      const checkCount = checkBoxes.filter((checkbox) => checkbox).length;


      if(checkCount === 4){
        setStrenght('Strong')
      } else if( checkCount === 3) {
        setStrenght('Medium')
      } else if (checkCount === 2) {
        setStrenght('Weak')
      } else if (checkCount === 1) {
        setStrenght('Too Weak!')
      } else {
        setStrenght('')
      }
    }

    else if (passwordLength >= 5 && passwordLength < 8 ) {
      const checkBoxes = [includeLowercase, includeNumbers, includeSymbols, includeUppercase];
      const checkCount = checkBoxes.filter((checkbox) => checkbox).length;

      if(checkCount === 4){
        setStrenght('Medium')
      } else if( checkCount === 3) {
        setStrenght('Medium')
      } else if (checkCount === 2) {
        setStrenght('Weak')
      } else if (checkCount === 1) {
        setStrenght('Too Weak!')
      } else {
        setStrenght('')
      }
    }

    else if (passwordLength >= 3 && passwordLength < 5 ) {
      const checkBoxes = [includeLowercase, includeNumbers, includeSymbols, includeUppercase];
      const checkCount = checkBoxes.filter((checkbox) => checkbox).length;

      if(checkCount === 4){
        setStrenght('Weak')
      } else if( checkCount === 3) {
        setStrenght('Weak')
      } else if (checkCount === 2) {
        setStrenght('Weak')
      } else if (checkCount === 1) {
        setStrenght('Too Weak!')
      } else {
        setStrenght('')
      }
    }

    else if (passwordLength < 3 ) {
      const checkBoxes = [includeLowercase, includeNumbers, includeSymbols, includeUppercase];
      const checkCount = checkBoxes.filter((checkbox) => checkbox).length;

      if(checkCount === 4){
        setStrenght('Too Weak!')
      } else if( checkCount === 3) {
        setStrenght('Too Weak!')
      } else if (checkCount === 2) {
        setStrenght('Too Weak!')
      } else if (checkCount === 1) {
        setStrenght('Too Weak!')
      } else {
        setStrenght('')
      }
    }
   }, [passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase])



const getBarsColors = () => {
    if (strenth === 'Too Weak!') {
      return [
        { backgroundColor: '#F64A4A', borderColor: 'transparent' },
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white' }
      ];
    } else if (strenth === 'Weak') {
      return [
        { backgroundColor: '#FB7C58', borderColor: '#FB7C58' },
        { backgroundColor: '#FB7C58', borderColor: '#FB7C58' },
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white' }
      ];
    } else if (strenth === 'Medium') {
      return [
        { backgroundColor: '#F8CD65', borderColor: '#F8CD65' },
        { backgroundColor: '#F8CD65', borderColor: '#F8CD65' },
        { backgroundColor: '#F8CD65', borderColor: '#F8CD65' },
        { backgroundColor: 'transparent', borderColor: 'white' }
      ];
    } else if (strenth === 'Strong'){
      return [
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' }
      ];
    } else {
      return [
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white' },
        { backgroundColor: 'transparent', borderColor: 'white'}
      ]
    }

  };
  
   const barColors = getBarsColors();

   

  return (
    <StrengthContainer>
     
        <StrenghtSpan>STRENGTH</StrenghtSpan>
        <StrenthBars>
            <StrengthText className='levelText'>{strenth}</StrengthText>
            <StrengthState>
                {barColors.map((color,index) => (
                    <Bars key={index} 
                    className={`bars bar${index +1}`} 
                    style={{
                        backgroundColor:color.backgroundColor,
                        border:`2px solid ${color.borderColor}`
                        
                    }}></Bars>
                ))}
                
            </StrengthState>
        </StrenthBars>
    </StrengthContainer>
  )
}

export default Strength


const StrengthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 2rem;
  background-color: var(--color-dark);
  padding: 1rem;
`
const StrenghtSpan = styled.span`
  color: var(--color-placeholder);
  font-size: .8rem;
  font-weight: 600;
`
const StrenthBars = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`
const StrengthText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-password);
`
const StrengthState = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;
`

const Bars = styled.div`
  width: 8px;
  height: 25px;
  border: 2px solid white;
`