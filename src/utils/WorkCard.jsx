import React from 'react'

const WorkCard = ({img, title , link}) => {
  return (
 <div className='w-full hover:shadow-2xl '>
     <a href={link} target='_blank' className='flex flex-col items-center justify-center gap-4 mb-8'>  
          <img src={img} alt="" className='h-50 w-100 rounded p-4 '/>
          <h2 className='text-md font-semibold'>{title}</h2>
  </a>
 </div>
  )
}

export default WorkCard