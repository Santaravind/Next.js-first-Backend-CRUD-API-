import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-800'>
        <div className='bg-purple-300 px-4 py-5 rounded-2xl'>
           
          <Image src={'/not-foundpage.svg'}  alt='not found page ' width={400} height={500}/>
         
        </div>
         <Link href={'/'} className='text-3xl font-bold  text-white bg-blue-400 px-3 py-5 rounded-2xl mt-3'>Back to Home</Link>
      
    </div>
  )
}

export default NotFoundPage
