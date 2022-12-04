import React from 'react'

const Location = ({location}) => {
  return (
    <article className='mainInfo'>
     
    <ul className='ulheader'>
        <li className='ulheader__li'>Name:  <br /> <span className='ulheader__span' >{location?.name}</span></li>
        <li className='ulheader__li'>Type: <br /> <span className='ulheader__span' >{location?.type}</span></li>
        <li className='ulheader__li'>Dimension: <br /> <span className='ulheader__span' > {location?.dimension}</span></li>
        <li className='ulheader__li'>Population: <br /> <span className='ulheader__span' >{location?.residents.length}</span></li>
    </ul>
    </article>
  )
}

export default Location