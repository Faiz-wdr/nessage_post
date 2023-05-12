import React from 'react'

const curryear = new Date().getFullYear();

const Footer = () => {
  return (

        <p className='ft-txt'>
          © Faiz Rahim .  All Rights Resrved {curryear}
        </p>

  )
}

export default Footer