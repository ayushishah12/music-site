import React, { useContext } from 'react'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Music = () => {
    const {playWithId}=useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)}>
      {
        songsData.map((item,index)=>(
           <div onClick={()=>playWithId(item.id)} key={index} className= 'gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
              <p className='text-white'>
                  <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                  <img className='inline w-10 mr-5' src={item.image} alt=""/>
                  {item.name}
              </p>
              </div>
        ))}
    </div>
  )
}

export default Music