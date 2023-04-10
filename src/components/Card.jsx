import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import mountFuji from "../assets/mount-fuji.png"

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={mountFuji}></img>
        <div className="card-info">
          <div className="card-info-location">
            <FontAwesomeIcon icon={faLocationDot} className="card-info-location-dot"/>
            <h4 className="card-info-location-name">JAPAN</h4>
            <a className="card-info-location-maps" href="">View on Google Maps</a>
          </div>
          <h2 className="card-info-place">Mount Fuji</h2>
          <h3 className="card-info-date">12 Jan, 2021 - 24 Jan, 2021</h3>
          <p className="card-info-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
          Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
      <hr />
  </div>
  )
}

export default Card