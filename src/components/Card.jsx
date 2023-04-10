import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={props.imageUrl}></img>
        <div className="card-info">
          <div className="card-info-location">
            <FontAwesomeIcon icon={faLocationDot} className="card-info-location-dot"/>
            <h4 className="card-info-location-name">{props.location}</h4>
            <a className="card-info-location-maps" href={props.googleMapsUrl} target="_BLANK">View on Google Maps</a>
          </div>
          <h2 className="card-info-place">{props.title}</h2>
          <h3 className="card-info-date">{props.startDate} - {props.endDate}</h3>
          <p className="card-info-description">{props.description}</p>
        </div>
      </div>
      <hr />
  </div>
  )
}

export default Card