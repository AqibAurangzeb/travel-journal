import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthAmericas} className="nav-logo" />
      <h3 className='nav-title'>my travel journal.</h3>
    </nav>
  )
}

export default Navbar