import Invitaion from './section/Invitaion'
import Landing from './section/Landing'
import LoveStory from './section/LoveStory'
import OpeningWord from './section/OpeningWord'
import RSVP from './section/RSVP'
import UserPrayer from './section/UserPrayer'
import WeddingDate from './section/WeddingDate'
import WalimahManner from './section/WalimahManner.tsx'
import ReactHowler from 'react-howler'
import Nashed from "./assets/img/nasheed.mp3"
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { useState } from 'react'


function App() {
  const [playNasheed, setPlayNasheed] = useState(true)
  return (
    <div className='bg-cust-bg-light-brown-color p-4 overflow-hidden relative'>
      <ReactHowler
        src={Nashed}
        playing={playNasheed}
        loop={false}
      />
      <div className='size-12 fixed bottom-6 right-6 border border-cust-blue-color p-2 flex justify-center items-center rounded-full z-[1000000000000000000] cursor-pointer bg-cust-bg-light-brown-color hover:bg-cust-very-light-blue-color'
      onClick={() => {
        setPlayNasheed(!playNasheed)
      }}
      >
        {playNasheed ?
          <IconPlayerPlayFilled className='fill-cust-blue-color' />
          :
          <IconPlayerPauseFilled className='fill-cust-blue-color' />
        }
      </div>
      <Landing />
      <OpeningWord />
      <Invitaion />
      <WeddingDate />
      <LoveStory />
      <WalimahManner />
      <RSVP />
      <UserPrayer />
    </div>
  )
}

export default App
