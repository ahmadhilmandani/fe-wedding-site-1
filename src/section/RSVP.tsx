import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { Bounce, toast } from "react-toastify";


export default function RSVP({guest_name, guest_key}: {guest_name: string, guest_key: number}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isAttend, setIsAttend] = useState(false)
  const [guestPrayer, setGuestPrayer] = useState('')

  function submitRSVP() {
    setIsLoading(true)
    axios.post(import.meta.env.VITE_PROD_API_BASE_URL + "/rsvp",
      {
        guest_key: guest_key,
        is_attend_party: isAttend,
        guest_prayer: guestPrayer
      }
    ).then(() => {
      toast.success('Terima Kasih telah Konfirmasi🙏!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }).catch(() => {
      toast.error('Error melakukan RSVP, silahkan coba lagi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }).finally(() => {
      setIsLoading(false)
    })
    
  }
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative pt-32" id="rsvp-kehadiran">
        <div className="max-w-[720px] w-full relative z-50">
          <h1 className="text-center mb-3 text-cust-red-color">RSVP Kehadiran</h1>
          <p className="mb-10 text-center">
            Dengan hormat kami harap kesediaannya untuk RSVP kehadiran dengan mengisi <i className="inline-block">form</i> di bawah ini,
          </p>
          <div className="mb-14">
            <label htmlFor="name" className="block mb-2 text-center font-bold">Nama</label>
            <input type="text" className="block w-full pb-3 outline-none ring-0 border-b border-cust-brown-color focus:border-cust-blue-color bg-transparent" name="name" id="name" value={guest_name} />
          </div>
          <div className="mb-14 w-fit mx-auto">
            <div className="block mb-2 text-center font-bold">
              Konfirmasi Kehadiran
            </div>
            <div className="flex gap-5 mb-14">
              <div className="flex gap-2">
                <input type="radio" name="confimAttend" id="willAttend" onFocus={()=>{
                  setIsAttend(true)
                }} />
                <label htmlFor="willAttend" className="block mb-2">Hadir</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="confimAttend" id="notAttend" onFocus={()=>{
                  setIsAttend(false)
                }} />
                <label htmlFor="notAttend" className="block mb-2" >Tidak Hadir</label>
              </div>
            </div>
          </div>

          <h1 className="text-center mb-4 text-cust-red-color">Mohon Do'a Restu...</h1>
          <p className="mb-2 text-center">
            Kami harap, hadirin sekalian dapat memberikan doa terbaik bagi acara berbahagia kami ini dengan mengisi
            <i className="inline-block">form</i> di bawah
          </p>
          <textarea name="" id="" className="block w-full p-4 outline-none ring-0 border border-cust-brown-color focus:border-cust-blue-color bg-transparent m-8 mx-auto" onChange={(e) => {
            setGuestPrayer(e.target.value)
          }}></textarea>
          <div className="w-40 mx-auto">
            <Button propIsLoading={isLoading} propOnClick={() => {
              submitRSVP()
            }}>
              RSVP
            </Button>
          </div>
        </div>
      </section >
    </>
  )
}