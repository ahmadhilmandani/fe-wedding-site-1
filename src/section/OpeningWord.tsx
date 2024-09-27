import { IconHeartFilled } from "@tabler/icons-react"
import waterColorBlueLight from "../assets/img/watercolor-blue-light.png"

export default function OpeningWord() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">
        <img src={waterColorBlueLight} alt="" className="block absolute bottom-[-180px] right-[-250px] rotate-45 z-[0.5] opacity-75 w-[640px]" />

        <div className="max-w-[640px] w-full relative z-50">
          <p className="text-center mb-5">
            Assalamualaikum Warahmatullah Wabarakaatuh.....
            <br />
            Dengan hanya mengharap wajah Allah Subhanahu wa ta'ala dan mengikuti sunnah Rasulullah Shallallahu alaihi wa sallam..
            <br />
            Ya Allah perkenankan kami
            untuk melaksanakan pernikahan kami...
          </p>
          <h1 className="text-center text-cust-red-color font-medium mb-2">Fikri Ilham Abdullah</h1>
          <p className="text-center">Putra dari Bpk. Moh Zainullah Ibu Nur Hidayati</p>
          <div className="my-8 flex justify-center items-center gap-4">
            <div className="w-[25%] h-[1px] bg-cust-blue-color">
            </div>
            <IconHeartFilled className="fill-cust-blue-color" size={32} />
            <div className="w-[25%] h-[1px] bg-cust-blue-color">
            </div>
          </div>
          <h1 className="text-center text-cust-red-color font-medium mb-2">Rafiqoh Yassar Hafizhah</h1>
          <p className="text-center">Putri dari Bpk. Akhmad Supriyadi Ibu. Elya Ulfa (Rahimahaallah)</p>
        </div>
      </section>
    </>
  )
}