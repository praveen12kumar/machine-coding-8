import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../db';
import {BiStopwatch} from "react-icons/bi";
import {CiLocationOn} from "react-icons/ci"
import "./evemtDetails.scss";
const EventDetails = () => {
   const {cardId} = useParams();
   const Event = data.meetups.find((event)=> event.id === cardId);   
   
   
   return (
    <div  className="Event-container">
      <div className="event-main">
        <div className="Event-header">
        <h1>{Event.title}</h1>
        <p>Hosted By:</p>
        <h3>{Event.hostedBy}</h3>
        </div>
        <div className="Event-image">
            <img src={Event.eventThumbnail} alt="" />
        </div>
        <div className="Event-details">
            <h2>Details</h2>
            <p>{Event.eventDescription}</p>
        </div>
        <div className="Event-Additional-info">
            <h2>
                Additional Information:
            </h2>
            <p><strong>Dress Code:</strong> {Event.additionalInformation.dressCode} </p>
            <p><strong>Age Restriction</strong> {Event.additionalInformation.ageRestrictions} </p>
            <h1>
                Event Tags:
            </h1>
            <div className="btn-section">
                <button className='option1'>{Event.eventTags[0]}</button>
                <button className="option2">{Event.eventTags[1]}</button>
            </div>
        </div>
      </div>
      <div className="event-aside">
            <div className="Event-timing">
                <span><BiStopwatch/></span>
                <div className="timing">
                    <p>{Event.eventEndTime}</p>
                    <p>{Event.eventEndTime}</p>
                </div>
            </div>
            <div className="Event-location">
                <span><CiLocationOn/></span>
                <div className="timing">
                    <p>{Event.location}</p>
                    <p>{Event.address}</p>
                </div>
            </div>
            <div className="Event-fees">
                <p className='fee'>{Event.price}</p>
            </div>

            <div className="speaker-container">
                <h1>Speakers: {Event.speakers.length}</h1>
                {
                    Event.speakers.map((speaker)=>(
                        <div className="speaker-card">
                            <div className="speaker-image" key={speaker.name}>
                                <img src={speaker.image} alt="" />
                            </div>
                            <div className="speakar-details">
                                <h3>{speaker.name}</h3>
                                <h4>{speaker.designation}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="RSVP-btn">
                <button className='rspv'>RSVP</button>
            </div>

      </div>
    </div>
  )
}

export default EventDetails
