import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [photos, setPhotos] = useState([
     {id:101, url:"https://wallpapers.com/images/featured/prague-l8aujv2epf7ojy0r.jpg"},
     {id:102, url:"https://images8.alphacoders.com/374/374028.jpg"},
     {id:103, url:"https://images7.alphacoders.com/487/thumb-1920-487159.jpg"},
     {id:104, url:"https://wallpapers.com/images/hd/prague-church-at-dawn-500ebpx4fnhzqxni.jpg"},
     {id:105, url:"https://wallpapers.com/images/hd/prague-churches-and-spires-kr2ll9pmha86r9tt.jpg"},
     {id:106, url:"https://c4.wallpaperflare.com/wallpaper/150/315/757/prague-czechia-czech-republic-europe-wallpaper-preview.jpg"},
     {id:107, url:"https://wallpapers-hub.art/wallpaper-images/41279.jpg"},
     {id:108, url:"https://wallpaper.dog/large/20388524.jpg"},
  ])
  const [index, setIndex] = useState(0)
  function prevPic(){
    if (!index){
      setIndex(photos.length - 1)
    }else{
      setIndex(index - 1)
    }
    
  }
  function nextPic(){
    if (index === photos.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }
  return (
    <div >
      <img src={photos[index].url} className="main"/>
      <div>
        <button onClick={() => prevPic()}>prev</button>
        <button onClick={() => nextPic()}>next</button>
      </div>
      <div id="timeline">
        {photos.map((photo, id) => {
          let style = id == index ? 'active':""
          return <img src={photo.url} className={style} />
        })}
      </div>
    </div>
  );
}
export default App