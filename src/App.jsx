
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'

import visitedPlacesData from './visitedPlacesData'

function App() {
  const cardElements = visitedPlacesData.map(placeData => {
    return <Card 
              {...placeData} 
            />
  })

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {cardElements}
      </div>
    </div>
  )
}

export default App
