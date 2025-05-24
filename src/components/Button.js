import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-4 py-4'>
        <button className='bg-gray-500 rounded-2xl text-white h-11 w-24 hover:bg-slate-200 hover:text-black'>{name}</button>
    </div>
  )
}   

export default Button