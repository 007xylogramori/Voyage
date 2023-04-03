import React, { useState } from "react";
import "./header.css";

//react-date-range
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

// mui icons
import LocalHotelRoundedIcon from "@mui/icons-material/LocalHotelRounded";
import LocalAirportRoundedIcon from "@mui/icons-material/LocalAirportRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import {useNavigate }from 'react-router-dom'
function Header({ type }) {
  const navigate=useNavigate()
  const [destination,setDestination]=useState("")
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    let updatedOptions = {
      ...options,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    };
    setOptions(updatedOptions);};


    const handleSearch=()=>{
      navigate("/hotels",{state:{destination,date,options}})
    } 
  return (
    <div className="header">
      <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListitem active">
            <LocalHotelRoundedIcon />
            <span>Stays</span>
          </div>
          <div className="headerListitem">
            <LocalAirportRoundedIcon />
            <span>Flights</span>
          </div>
          <div className="headerListitem">
            <DirectionsCarFilledRoundedIcon />
            <span>Car Rentals</span>
          </div>
          <div className="headerListitem">
            <AttractionsRoundedIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListitem">
            <HailRoundedIcon />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
            <p className="headerDesc">
              Get rewarded for your travels- unlock instant savings of 10% or
              more with a free Voyage account
            </p>
            <button className="headerBtn">Sign in/Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <LocalHotelRoundedIcon className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headerSearchInput"
                  value={destination}
                  onClick={() => {
                    setOpenOptions(false);
                    setOpenDate(false);
                  }}
                  onChange={(e)=>{setDestination(e.target.value)}}
                />
              </div>
              <div className="headerSearchItem">
                <CalendarMonthIcon className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                  }}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")}to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <PersonIcon className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDate(false);
                  }}
                >{`${options.adult} adult ${options.children} childrem ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">{`${options.adult}`}</span>
                        <button
                          className="optionCounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">{`${options.children}`}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                        <span className="optionCounterNumber">{`${options.room}`}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={handleSearch} className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
