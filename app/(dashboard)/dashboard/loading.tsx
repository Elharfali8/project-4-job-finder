'use client'
import React from 'react'
import { DNA } from 'react-loader-spinner'

const loading = () => {
  return (
      <div className='grid place-items-center min-h-[50vh]'>
          <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    </div>
  )
}

export default loading