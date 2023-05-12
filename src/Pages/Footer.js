import React from 'react'

const curryear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
        <p className='ft-txt'>
          © <span>Faiz Rahim</span> . All Rights Resrved {curryear}
        </p>
    </div>
  )
}

export default Footer