import React, { useState, useRef, useEffect } from 'react';
import { songsData } from '../assets/assets';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef(null); // Ref for dropdown

  // Handle input change and filter songs
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    filterSongs(value);
  };

  // Filter songs based on input value
  const filterSongs = (value) => {
    const results = songsData.filter(song =>
      song.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSongs(results);
    setIsDropdownVisible(results.length > 0); // Show dropdown if there are filtered results
  };

  // Select a song and update state
  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setInput(song.name);
    setFilteredSongs([]); // Clear filtered songs
    setIsDropdownVisible(false); // Hide dropdown after selecting a song
  };

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFilteredSongs([]); // Clear filtered songs
      setIsDropdownVisible(false); // Hide dropdown
    }
  };

  // Set up the event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full'>
      <input
        type='text'
        placeholder='Search any Song'
        value={input}
        onChange={handleInputChange}
        onFocus={() => {
          filterSongs(input); // Filter songs based on current input
          setIsDropdownVisible(true); // Show dropdown on focus
        }} 
        className='bg-pink-500 text-purple-950 w-[48rem] h-9 pl-6 rounded-3xl px-3 placeholder:text-slate-600 font-bold outline-none'
      />

      {isDropdownVisible && filteredSongs.length > 0 && (
        <div
          ref={dropdownRef} // Attach ref to the dropdown container
          className='absolute bg-pink-500 border rounded-b-2xl mt-1 w-full max-h-40 overflow-y-auto z-10'
        >
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongSelect(song)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {song.name}
            </div>
          ))}
        </div>
      )}

      {/* Display currently playing song and audio controls */}
      {selectedSong && (
        <div className='mt-4'>
          <p>Now Playing: {selectedSong.name}</p>
          <audio controls autoPlay key={selectedSong.file}>
            <source src={selectedSong.file} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
