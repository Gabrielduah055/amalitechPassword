import React, { useEffect, useState } from 'react'
import './strenth.css'

type StrenthProps = {
    passwordLength:number
}



const Strength = ({passwordLength}:StrenthProps) => {
 
   const [strenth, setStrenght] = useState<string>('Midium')


   useEffect(() => {
    if(passwordLength < 3){
        setStrenght('Too Weak!');
    }else if(passwordLength <5 && passwordLength >=3){
        setStrenght('Weak');
    }else if(passwordLength <8 && passwordLength>=5) {
        setStrenght('Medium')
    } else {
        setStrenght('Strong')
    }
   }, [passwordLength])


   //function to set bar colors based on strength
//    const getBarsColors = () => {
//     if(strenth === 'Too Weak!'){
//         return ['#F64A4A', 'transparent', 'transparent', 'transparent']
//     }else if(strenth === 'Weak') {
//         return['#FB7C58','#FB7C58','transparent','transparent']
//     }else if(strenth === 'Medium'){
//         return ['#F8CD65','#F8CD65','#F8CD65', 'transparent']
//     }else {
//         return ['#A4FFAF','#A4FFAF','#A4FFAF', '#A4FFAF']
//     }
//    }


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
    } else {
      return [
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' },
        { backgroundColor: '#A4FFAF', borderColor: '#A4FFAF' }
      ];
    }
  };
  
   const barColors = getBarsColors();

   

  return (
    <div className='strengthContainer'>
        <span>STRENGTH</span>
        <div className="strengthBars">
            <p className='levelText'>{strenth}</p>
            <div className="barStates">
                {barColors.map((color,index) => (
                    <div key={index} 
                    className={`bars bar${index +1}`} 
                    style={{
                        backgroundColor:color.backgroundColor,
                        border:`2px solid ${color.borderColor}`
                        
                    }}></div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Strength
