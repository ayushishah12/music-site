import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'

import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Routes, Route } from 'react-router-dom'




const App = () => {
const {audioRef,track}=useContext(PlayerContext);

  return (
    
    <div className='h-screen bg-black'>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

      
      </Routes>

      <div className='h-[90%] flex'>
        
        <Sidebar />
      
       <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'> </audio>
      </div>
  )
}

export default App
