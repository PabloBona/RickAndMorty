import axios from 'axios';
import React, { useEffect, useState } from 'react'
 


const ResidentCard = ({url}) => {
     

    const [resident, setResident] = useState()
    
    useEffect(() => {
      axios.get(url)
      .then( res => setResident(res.data))
      .catch( error => console.log(error))
    }, [])
    
  return (
<article className="card">
      <header className="card__header">
        <img className="card__avatar" src={resident?.image} alt="" />
        <div className="card__circle-container">
          <div className={`card__circle ${resident?.status}`}></div>
          <span className="card__circle-label">{resident?.status}</span>
        </div>
      </header>
      <section className="card__body">
        <h3 className="card__name">{resident?.name}</h3> 
        <div><hr className='hr' /></div>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__item-label">Species</span>
            <span className="card__item-value">{resident?.species}</span>
          </li>
          <li className="card__item">
            <span className="card__item-label">Origin</span>
            <span className="card__item-value">{resident?.origin.name}</span>
          </li>
          <li className="card__item">
            <span className="card__item-label">Episodes where appear</span>
            <span className="card__item-value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>

  )
}

export default ResidentCard


// ○ Nombre (“name”).
// ○ Imagen (“image”).
// ○ Status: Vivo, muerto o desconocido
// (“status”).
// ○ Lugar de origen (“origin.name”).
// ○ Cantidad de episodios donde aparece (episode.length).