import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";

type Props = {}

function Footer({}: Props) {
  return (
    <div className='flex flex-col h-[15rem] justify-end items-start gap-5 px-10' style={{ background: "#FBFBFB" }}>
        <h1 className='text-5xl'>
          About
        </h1>

        <div className='flex flex-row gap-10 ml-10'>
          <h2 className='text-3xl'>
            SourceImage
          </h2>
          <p className='text-xl'>
            <a href="https://www.pinterest.com/pin/1759287345107274/" target="_blank" >
                Pinterest
            </a>
          </p>
          <p className='text-xl'>
            <a href="https://www.youloveit.com/cartoons/1266-lots-of-big-and-beautiful-pictures-of-elsa-from-frozen-2-movie.html" target='_blank'>
                YouLoveIt
            </a>
          </p>
        </div>

        <hr />

        <div className='w-full px-3'>
            <a href="https://github.com/Kittitra" target="_blank">
                <FaSquareGithub size={50} className=' justify-self-end' />
            </a>
        </div>
    </div>
  )
}

export default Footer