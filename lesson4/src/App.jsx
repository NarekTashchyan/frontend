import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Song from './Song';
import { Album } from './Album';
import { SongList } from './SongList';
import { PlayList } from './playList';
import './App.css';

function App() {
  const [playList, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([
    { id: 100, title: 'Na na na', artist: 'Tatul Avoyan', duration: 3.75, inPlaylist: false },
    { id: 101, title: 'im axpery', artist: 'Tatul Avoyan', duration: 3.75, inPlaylist: false },
    { id: 102, title: 'lets go back to the beach', artist: 'Tatul Avoyan', duration: 3.75, inPlaylist: false }
  ]);

  const removeSongs = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const moveDown = id => {
    const newplaylist = [...playList]
    const songIndex = newplaylist.findIndex(song => song.id === id)
    if(songIndex < newplaylist.length - 1) {
      ;[newplaylist[songIndex],newplaylist[songIndex + 1]] = [newplaylist[songIndex + 1],newplaylist[songIndex]]
    }
    setPlaylist(newplaylist)
  }

  const addToPlayList = id => {
    const song = songs.find(song => song.id === id);
    if (song) {
      song.inPlaylist = true;
      setPlaylist([...playList, song]);
      removeSongs(id);
    }
  };

  return (
    <>
      <h1>Hello props</h1>
      <Album name="classic music" year={2010}>
        <SongList items={songs} onDelete={removeSongs} add={addToPlayList} moveDown={moveDown} />
      </Album>
      <PlayList items={playList} onDelete={removeSongs} moveDown={moveDown} />
    </>
  );
}

export default App;
