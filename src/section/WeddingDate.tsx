import Button from "../components/Button"
import WhiteFlower from "../assets/img/white-flower.webp"
import LeafThree from "../assets/img/leaf-3.webp"
import WatercolorBlue from "../assets/img/watercolor-blue-dark.webp"
import BlueFlowerOne from "../assets/img/blue-flower-1.webp"
import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"

export default function WeddingDate() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [targetDate] = useState(new Date("January 12, 2025 00:00:00").getTime())
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function countdown() {
  
    // Perbarui countdown setiap detik
    setInterval(function () {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Hitung waktu yang tersisa
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));


    }, 1000)
  }

  countdown()
  
  return (
    <>
      <section ref={ref} className="w-full min-h-screen flex justify-center items-center relative">
        <img src={BlueFlowerOne} alt="" className="hidden xl:block absolute top-0 left-[-180px] rotate-[40deg] z-[3] xl:w-[420px]" />
        <img src={WhiteFlower} alt="" className="hidden xl:block absolute top-[200px] left-[-200px] rotate-[-195deg] z-[2] xl:w-[500px]" />
        <img src={LeafThree} alt="" className="hidden xl:block absolute top-[140px] left-[-100px] z-[1] rotate-[5deg] xl:w-[400px] opacity-50" />


        <img src={WhiteFlower} alt="" className="block xl:hidden absolute top-0 left-[-120px] rotate-[60deg] z-[2]" />
        <img src={LeafThree} alt="" className="block xl:hidden absolute top-0 left-[-20px] rotate-[85deg] z-[1] opacity-50" />

        <img src={WatercolorBlue} alt="" className="block xl:hidden absolute z-[1] mx-auto left-0 right-0 w-[640px]" />

        <div className="max-w-[720px] w-full relative z-50">
          <motion.h1 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-cust-red-color text-center">
            Tanggal Pernikahan
          </motion.h1>
          <motion.strong animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="block custom-heading-1 text-center mb-5">
            12 Januari 2025
          </motion.strong>

          <div className="flex justify-center gap-4 mb-10 mx-auto">
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
                {Math.abs(days)}
              </motion.div>
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
                Hari
              </motion.div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
              {Math.abs(hours)}
              </motion.div>
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
                Jam
              </motion.div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
              {Math.abs(minutes)}
              </motion.div>
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
                Menit
              </motion.div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
              {Math.abs(seconds)}
              </motion.div>
              <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="xl:text-2xl">
                Detik
              </motion.div>
            </div>

          </div>
          <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-40 mx-auto">
            <Button propOnClick={() => {
              window.location.href = '#rsvp-kehadiran'
            }}>
              RSVP DI SINI
            </Button>
          </motion.div>
        </div>

        
        <img src={BlueFlowerOne} alt="" className="hidden xl:block absolute top-0 right-[-180px] rotate-[20deg] z-[3] xl:w-[420px]" />
        <img src={WhiteFlower} alt="" className="hidden xl:block absolute top-[200px] right-[-200px] rotate-[200deg] z-[2] xl:w-[500px]" />
        <img src={LeafThree} alt="" className="hidden xl:block absolute top-[140px] right-[-100px] z-[1] rotate-[-25deg] xl:w-[400px] opacity-50" />


        <img src={WhiteFlower} alt="" className="block xl:hidden absolute bottom-[-75px] right-[-120px] rotate-[-120deg] z-[2]" />
        <img src={LeafThree} alt="" className="block xl:hidden absolute bottom-[-60px] right-[10px] rotate-[-85deg] z-[1] opacity-50" />

      </section>
    </>
  )
}