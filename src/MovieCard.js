import React from 'react';

function MovieCard(props)
{
  const [isCliked, setIsClicked] = React.useState(false)

  function toggle()
  {
    setIsClicked(prev => !prev)
  }

  return(
    <div className='movie-card' id={props.id} onClick={toggle}>
      <div className='img-div'>
        <img src={props.img} alt={props.title} className='movie-img'/>
        <p className='movie-rating'>{props.rating}</p>
        <p className='movie-overview'>{isCliked && props.overview}</p>
      </div>
      <p className='movie-title'>{props.title}</p>
      <p className='movie-date'>{props.date}</p>
    </div>
  )
}

export default MovieCard