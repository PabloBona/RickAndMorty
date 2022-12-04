import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import "./Components/Styles/RickMorty.css"
import ResidentCard from './Components/ResidentCard'
import LocationInfo from './Components/LocationInfo'
import ErrorFetch from './Components/ErrorFetch'

function App() {
  const [location, setlocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [haserror, setHaserror] = useState(false)
  //https://rickandmortyapi.com/api/location/3

  const randomIdLocation = Math.floor(Math.random()*126)+1

useEffect(() => {
  let URL
    if (locationInput) {
       URL =  `https://rickandmortyapi.com/api/location/${locationInput}`
      } else { 
        const randomIdLocation = Math.floor(Math.random()*126)+1
        URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
      }

      axios.get(URL)
  .then( res => {
    setlocation(res.data)
    setHaserror(false)
  })
  .catch( error => {
    setHaserror(true)
    console.log(error)})
}, [locationInput])
 

const handleSubmit = (e) => { 
  e.preventDefault()
  setLocationInput(e.target.inputSearch.value)
  console.log(locationInput);
}
  return (
    <div className="App">
      <img className='photo' src="https://i.postimg.cc/wTBbPXmr/zyro-image.png" alt="" /> <br />
      <form className='search' onSubmit={handleSubmit}>
        <input id="inputSearch" placeholder='Chapter between 1 and 126' type="text" />
        <button className='search__button' >Search</button>
      </form>  
     { 
     haserror ?
     <ErrorFetch />
     :
      <>
           <LocationInfo location={location} />
      <div className='residents-container'>
        {
          location?.residents.map(url => (
            <ResidentCard key={url} url={url} />
          ) )
        }
        
      </div>
      </>
       }
    </div>
  )
}

export default App
