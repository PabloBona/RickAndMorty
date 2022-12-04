import React from 'react'

const Location = ({location}) => {
  return (
    <article className='mainInfo'>
     
    <ul className='ulheader'>
        <li className='ulheader__li item1'>Name:  <br /> <span className='ulheader__span item1' >{location?.name}</span></li>
        <li className='ulheader__li item2'>Type: <br /> <span className='ulheader__span item2' >{location?.type}</span></li>
        <li className='ulheader__li item3'>Dimension: <br /> <span className='ulheader__span item3' > {location?.dimension}</span></li>
        <li className='ulheader__li item4'>Population: <br /> <span className='ulheader__span item4' >{location?.residents.length}</span></li>
    </ul>
    </article>
  )
}

export default Location