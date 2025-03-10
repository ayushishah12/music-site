// import React from 'react'
// import {assets} from '../assets/assets'
// import {useNavigate} from 'react-router-dom'

// const Sidebar = () => {
//  const navigate = useNavigate();
//   return (

    

//     <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
//      <div className='bg-slate-900 h-[20%] rounded flex flex-col justify-around'>
//      <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-5 cursor-pointer'>
//       <img className='w-7 pt-[4rem]' src={assets.home_icon} alt="" />
//       <p className='font-bold pt-[4rem]'>Home</p>
//       </div>
      
//         </div>
      
//         <div className='bg-slate-900 h-[85%] rounded'>
//           <div className='p-4 flex items-center justify-between'>
//             <div className='flex items-center gap-3 '>
//               <img className='w-8' src={assets.stack_icon} alt="" />
//               <p className='font-semibold'>Your Library</p>
//             </div>
//             <div className='flex items-center gap-3'>
//               <img className='w-5' src={assets.arrow_icon} alt="" />
//               <img className='w-5' src={assets.plus_icon} alt="" />
//             </div>
//         </div>
//         <div className='p-4 bg-slate-800 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
//          <h1>Create yout own playlist</h1>
//          <p className='font-light'>Add your favourite songs to playlist</p>
//          <button onClick={()=>navigate('/playlist')} className='px-4 py-1.5 bg-white hover:bg-slate-400 text-[15px] text-black rounded-full mt-4'>create playlist</button>
//         </div>
       
//       </div>
//       </div>
    
//   )
// }

// export default Sidebar
import React, { useEffect, useRef } from 'react'
import{assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";
const Sidebar = () => {
  
const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
      <div className='bg-slate-900 h-[13%] rounded flex flex-col justify-around'>
        <div className='flex flex-col-2'>
        <img className='h-12 w-12 rounded-3xl ml-5 mt-3 ' src={assets.avatar}/>
        <img className='h-11 w-[13rem] rounded-xl ml-5 mt-4' src={assets.sound}/>
        </div>
        
        
        
        
      </div>
      <div className='bg-slate-900 h-[85%] rounded'>
      <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-4 cursor-pointer'>
            <img className='w-9 pt-5 ' src={assets.home_icon} alt=""/>
            <p className='pt-5  w-20 font-bold'>Home</p>
            
        </div>
        <div className='p-4 flex items-center justify-between'>
       
            <div className='flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt=""/>
                <p className='font-semibold'>Your Library</p>
              
            </div>
            
            <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.arrow_icon} alt=""/>
                <img className='w-5' src={assets.plus_icon} alt=""/>
            </div>
            </div>
            <div onClick={()=>(navigate("/Review"))}className='pl-2 pt-3'>
            {/* <p className='pt-1 pl-16  w-20 font-bold'>Review</p> */}
            <button className="flex items-center px-4 py-2  bg-red-900 text-white rounded-lg hover:bg-slate-700 pl-5">
      <FaPencilAlt className="mr-2 " /> Write a Review
    </button>
          </div>
        
        <div className='p-4 bg-slate-800 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>
            <h1>Create your first playlist</h1>
            <p className='font-light'>Craft the soundtrack to your story!</p>
            <button onClick={()=>(navigate("/playlist"))} className='px-4 py-1.5 hover:bg-slate-400 bg-black text-[15px] text-white rounded-full mt-4'>Create playlist</button>
        </div>
        <div>
          <img className='h-[18rem] w-[40rem]' src={assets.avatar}/>
        </div>
        
      </div>
    </div>
    
  )
}

export default Sidebar
