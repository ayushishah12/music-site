import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../context/SearchBar'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img
            onClick={() => navigate(-1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
          />
          <img
            onClick={() => navigate(1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
          />

          <SearchBar />
        </div>
        <div className='flex items-center gap-2'>


          <p className='bg-purple-400 text-white w-9 h-9 rounded-full flex items-center justify-center'>
            A
          </p>
        </div>
      </div>

    </>
  )
}

export default Navbar
