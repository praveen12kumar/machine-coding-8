import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./home.scss";
import  {data} from "../db";
import Card from "../components/Card";
const Home = () => {

  return (
    <div className="home-container">
      <div className="home-upper">
        <div className="heading-container">
          <p>Meetup Events</p>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Select Event Type{" "}
            <span className="dropdown">
              {" "}
              <IoMdArrowDropdown />{" "}
            </span>{" "}
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="home-main">
        {
           data.meetups.map((cardData)=>(
                <Card cardData = {cardData} key={cardData.id}/>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
