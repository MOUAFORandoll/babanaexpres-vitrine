import React from 'react'

export default function SocialIcons({Icons=Array<string>()}) {
  return (
    <div className='text-teal-500'>
      {Icons.map((icon, index) => (
      <span className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300' key={index}>{icon}&nbsp;</span>
    ))}
    </div>
  )
}
