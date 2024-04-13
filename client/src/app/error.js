"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='min-h-screen  flex flex-row items-center justify-center px-10'>
        <img src="./error-page-image.png" alt="Error Imahe" className='w-[50%] object-cover' />
        <div className="flex flex-col gap-8 items-center ">
            <h3 className='text-6xl font-bold'>We are so sorry!</h3>
            <p className="text-justify leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus blanditiis, doloremque dolorum, tempore, nemo quibusdam porro impedit repellat ratione minima soluta unde. Quod, expedita? Laboriosam fugiat nostrum mollitia nulla perferendis?</p>

            <Link href={'/'} className='px-3 py-2 bg-red-600 text-white cursor-pointer hover:bg-black rounded-md transition-all duration-500'>Redirect Me to Safe Place</Link>

        </div>
    </div>
  )
}

export default error
