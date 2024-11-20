import { IconCalendarFilled, IconClockFilled, IconMapPinFilled } from "@tabler/icons-react"
import Button from "../components/Button"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export default function Invitaion() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <section ref={ref} className="w-full min-h-screen flex justify-center items-center relative">
        <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="max-w-[720px] w-full relative z-50">
          <motion.p animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-8">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri Resepsi Pernikahan kami. yang Insya Allah akan dilaksanakan pada :
          </motion.p>
          {/* 
          <div className="bg-cust-very-light-blue-color p-10 xl:p-16 mb-20">
            <h1 className="custom-heading-2 text-center mb-8">
              Akad Nikah
            </h1>
            <div className="flex gap-4 items-center mb-4">
              <IconCalendarFilled className="fill-cust-brown-color" size={24} />
              <div>
                Ahad, 11 Agustus 2024
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <IconClockFilled className="fill-cust-brown-color" size={24} />
              <div>
                08:00 - 11:30
              </div>
            </div>
            <div className="flex gap-4 items-center mb-12">
              <IconMapPinFilled className="fill-cust-brown-color" size={24} />
              <div>
                Kediaman Mempelai Wanita Jl. Pintu Gerbang 94, Pamekasan
              </div>
            </div>
            <Button>
              LIHAT DI PETA
            </Button>
          </div> 
          */}

          <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="bg-cust-very-light-blue-color p-10 xl:p-16">
            <motion.h1 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-center mb-8">
              Resepsi
            </motion.h1>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="flex gap-4 items-center mb-4">
              <IconCalendarFilled className="fill-cust-brown-color" size={24} />
              <div>
                Ahad, 12 Januari 2025
              </div>
            </motion.div>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="flex gap-4 items-center mb-4">
              <IconClockFilled className="fill-cust-brown-color" size={24} />
              <div>
                09:00 WIB - Selesai
              </div>
            </motion.div>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="flex gap-4 items-center mb-12">
              <IconMapPinFilled className="fill-cust-brown-color" size={24} />
              <div>
                NK Cafe Karangploso
              </div>
            </motion.div>
            <Button propOnClick={() => {
              window.location.href = 'https://maps.app.goo.gl/JwKCLxNSVpKJVixp6'
            }}>
              LIHAT DI PETA
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}