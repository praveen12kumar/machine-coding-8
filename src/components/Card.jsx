import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./card.scss"
const Card = ({cardData}) => {
  const navigate = useNavigate();
    return (
    <div className='card-container'>
      <div className="image-container" onClick={()=> navigate(`/${cardData.id}`)} >
        <img src={cardData.eventThumbnail} alt="" />
        <p>{cardData.eventType} Event</p>
      </div>
      <div className="card-details">
        <p>{cardData.eventStartTime}</p>
        <p>{cardData.hostedBy}</p>
      </div>
    </div>
  )
}

export default Card
