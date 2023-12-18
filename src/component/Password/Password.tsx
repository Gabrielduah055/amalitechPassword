import React, { useState } from 'react'
import './password.css'

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
    <div className='passwordGenerator'>
        <div className="passwordGenerate">
          <p 
            style={{color:password ? '#E6E5EA' : '#817D92'}}>{password ? password : preDefine}</p>
          <i className="uil uil-copy" onClick={copyToClipboard}></i>
        </div>
    </div>
  )
}

export default Password
