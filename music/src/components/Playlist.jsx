import { useContext, useRef, useState } from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';


function Playlist() {
  const [playlist, setPlaylist] = useState([]);
  // const [selectedSong, setSelectedSong] = useState(null);
  const inputRef = useRef(null);
  const { playWithId , track, pause, setPlayStatus } = useContext(PlayerContext); 

  const handleAddSong = () => {
const selectedSongId=Number(inputRef.current.value);
const selectedSong=songsData.find((song)=>song.id===selectedSongId);
    if (selectedSong && !playlist.find((song) => song.id === selectedSong.id)) {
      setPlaylist([...playlist, selectedSong]);
    }
  };
  const handlePlayOnHover=(song)=>{
    playWithId(song.id);
  };

  const handleRemoveSong = (songId) => {
    if (track && track.id === songId) {
      pause(); // Pause the audio
      setPlayStatus(false); // Update play status to false
    };
    // Remove song from playlist
    setPlaylist(playlist.filter((song) => song.id !== songId)); // Remove song by filtering out its ID
  };

  return (
    <div className="p-6 bg-slate-900 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">My Playlist</h2>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2 ">Select a Song to Add</h3>
        <div className="flex items-center space-x-4">
          
          <select
            onChange={(e) =>
              setSelectedSong(songsData.find((song) => song.id === Number(e.target.value)))
            }
            ref={inputRef}
            defaultValue=""
            className="border p-2 rounded w-full text-black bg-slate-500"
          >
            <option value=" overflow-auto scroll " >
              Choose a song
            </option>
            {songsData.map((song) => (
              <option key={song.id} value={song.id}>
                {song.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddSong}
            className="bg-slate-500 hover:bg-slate-700 text-white font-semibold px-4 flex items-center rounded-2xl h-12"
          >
            Add to Playlist
          </button>
        </div>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-2">Playlist</h3>
      <ul className="list-disc list-inside space-y-2">
        {playlist.map((song) => (
          <li key={song.id} className="text-lg">
            <span  onClick={()=>handlePlayOnHover(song)}>
            {song.name}
            </span>
            <button
              onClick={() => handleRemoveSong(song.id)} // Remove song on click
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-3xl ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

 export default Playlist;