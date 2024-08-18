import Invitaion from './section/Invitaion'
import Landing from './section/Landing'
import LoveStory from './section/LoveStory'
import OpeningWord from './section/OpeningWord'
import RSVP from './section/RSVP'
import WeddingDate from './section/WeddingDate'

function App() {

  return (
    <div className='bg-cust-bg-light-brown-color p-4 overflow-hidden'>
      <Landing />
      <OpeningWord />
      <Invitaion />
      <WeddingDate />
      <LoveStory />
      <RSVP />
    </div>
  )
}

export default App
