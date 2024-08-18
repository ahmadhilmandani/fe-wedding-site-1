import Invitaion from './section/Invitaion'
import Landing from './section/Landing'
import OpeningWord from './section/OpeningWord'
import WeddingDate from './section/WeddingDate'

function App() {

  return (
    <div className='bg-cust-bg-light-brown-color p-4 overflow-hidden'>
      <Landing />
      <OpeningWord />
      <Invitaion />
      <WeddingDate />
    </div>
  )
}

export default App
