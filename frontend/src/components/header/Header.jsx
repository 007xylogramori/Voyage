import React from 'react'
import './header.css'
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';
import LocalAirportRoundedIcon from '@mui/icons-material/LocalAirportRounded';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
function Header() {
  return (
    <div className='header'>
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListitem active">
        <LocalHotelRoundedIcon />
        <span>Stays</span>
        </div>
        <div className="headerListitem">
        <LocalAirportRoundedIcon/>
        <span>Flights</span>
        </div>
        <div className="headerListitem">
        <DirectionsCarFilledRoundedIcon/>
        <span>Car Rentals</span>
        </div>
        <div className="headerListitem">
        <AttractionsRoundedIcon/>
        <span>Attractions</span>
        </div>
        <div className="headerListitem">
        <HailRoundedIcon/>
        <span>Airport Taxis</span>
        </div>
       
        
      </div>
      <h1 className='headerTitle'>A lifetime of discounts? Its Genius</h1>
      <p className="headerDesc">Get rewarded for your travels- unlock instant savings of 10% or more with a free Voyage account</p>
      <button className="headerBtn">Sign in/Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
        <LocalHotelRoundedIcon  className='headerIcon'/>
        <input type="text" placeholder='where are you going?' className='headerSearchInput' />
        </div>
        <div className="headerSearchItem">
        < CalendarMonthIcon className='headerIcon'/>
        <span className='headerSearchText'>date to date</span>
        </div>
        <div className="headerSearchItem">
        <PersonIcon className='headerIcon'/>
        <span className='headerSearchText'>2 adults 2children 1 room</span>
        </div>
        <div className="headerSearchItem">
        <button className="headerBtn">Search</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
