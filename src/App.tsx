/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Invitaion from './section/Invitaion'
import Landing from './section/Landing'
import LoveStory from './section/LoveStory'
import OpeningWord from './section/OpeningWord'
import RSVP from './section/RSVP'
import UserPrayerList from './section/UserPrayerList.tsx'
import WeddingDate from './section/WeddingDate'
import WalimahManner from './section/WalimahManner.tsx'
import ReactHowler from 'react-howler'
import Nashed from "./assets/img/nasheed.mp3"
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from "axios"
import { IconMailOpenedFilled } from "@tabler/icons-react"
import Button from './components/Button.tsx'
import WatercolorBlue from "./assets/img/watercolor-blue-dark.webp"
import WatercolorBlueLight from "./assets/img/watercolor-blue-light.webp"
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from 'react-toastify'

type typeGuestData = {
  data: object | null
};

function App() {
  const [playNasheed, setPlayNasheed] = useState(true)
  const [guestKey, setGuestKey] = useState('')
  const [guestData, setGuestData] = useState<typeGuestData>({
    data: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const [guestNameByParam, setGuestNameByParam] = useState('')


  function openInvitation() {
    setIsLoading(true)
    axios.post(import.meta.env.VITE_PROD_API_BASE_URL + "/like-auth",
      {
        guest_key: guestKey,
        guest_name: decodeURIComponent(guestNameByParam)
      }
    ).then((res: AxiosResponse<typeGuestData>)  => {
      setGuestData(res.data)
      toast.success('Jazakumullah Khaiir telah membuka undangan kami🙏!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { fontSize: "14px", zIndex: "10000000000000000000000000000000" }
      });
    }).catch(() => {
      toast.error('Gagal! Pastikan kunci benar dan coba lagi!🙏', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { fontSize: "14px", zIndex: "10000000000000000000000000000000" }
      });
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('tamu') || 'Budi Andi'
    setGuestNameByParam(name)
  }, [])

  return (
    <>
      <ToastContainer stacked className={'z-[1000000000000000000000000000000000]'} />

      {!guestData.data ?
        <>
          <section className="w-full min-h-screen flex justify-center items-center bg-cust-bg-light-brown-color z-[10000000] overflow-hidden py-20 relative">
            <img src={WatercolorBlue} alt="" className="block absolute z-[1] top-[40px] left-[-180px] w-[640px]" />

            <div className="max-w-[720px] w-full">
              <IconMailOpenedFilled className="fill-cust-red-color mx-auto mb-2 border flex justify-center items-center size-14 aspect-square border-cust-red-color rounded-full p-3" />
              <h1 className="text-center text-cust-red-color font-medium mb-10">Undangan Pernikahan <br /> Rafiqah & Fikri</h1>
              <p className="text-center mb-5">
                Kepada Yang Terhormat,
                <br />
                Bapak / Ibu,
              </p>
              <h2 className="custom-heading-2 mb-3 text-center">
                {guestNameByParam}
              </h2>

              <div className="mt-14">
                <label htmlFor="name" className="block mb-2 text-center font-bold">Buka undangan dengan Kunci Khusus yang dikirim via WA🙏</label>
                <input type="text" className="block w-full pb-3 outline-none ring-0 border-b border-cust-brown-color focus:border-cust-blue-color bg-transparent text-center" name="name" id="name" onChange={(e) => {
                  setGuestKey(e.target.value)
                }} />
                <div className="w-40 mx-auto mt-10">
                  <Button propIsLoading={isLoading} propOnClick={() => {
                    openInvitation()
                  }}>
                    Buka Undangan
                  </Button>
                </div>
              </div>
            </div>
            <img src={WatercolorBlueLight} alt="" className="absolute bottom-[-180px] right-[-180px] w-[640px]" />

          </section>
        </>
        :
        <>
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
            <RSVP guest_name={guestData.data.guest_name} guest_key={guestData.data.id} />
            <UserPrayerList />
          </div>
        </>
      }
    </>
  )
}

export default App
