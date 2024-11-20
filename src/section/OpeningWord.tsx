import { IconHeartFilled } from "@tabler/icons-react"
import waterColorBlueLight from "../assets/img/watercolor-blue-light.webp"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

export default function OpeningWord() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <section ref={ref} className="w-full min-h-screen flex justify-center items-center relative">
        <img src={waterColorBlueLight} alt="" className="block absolute bottom-[-180px] right-[-250px] rotate-45 z-[0.5] opacity-75 w-[640px]" />

        <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="max-w-[720px] w-full relative z-50">
          <motion.p animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="text-center mb-5">
            Assalamualaikum Warahmatullah Wabarakaatuh.....
            <br />
            Dengan hanya mengharap wajah Allah Subhanahu wa ta'ala dan mengikuti sunnah Rasulullah Shallallahu alaihi wa sallam..
            <br />
            Ya Allah perkenankan kami
            untuk melaksanakan pernikahan kami...
          </motion.p>
          <motion.h1 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="text-center text-cust-red-color font-medium mb-2">Rafiqah Yassar Hafizhah</motion.h1>
          <motion.p animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="text-center">Putri dari Bpk. Akhmad Supriyadi Ibu. Elya Ulfa (Rahimahaallah)</motion.p>
          <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="my-8 flex justify-center items-center gap-4">
            <div className="w-[25%] h-[1px] bg-cust-blue-color">
            </div>
            <IconHeartFilled className="fill-cust-blue-color" size={32} />
            <div className="w-[25%] h-[1px] bg-cust-blue-color">
            </div>
          </motion.div>
          <motion.h1 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="text-center text-cust-red-color font-medium mb-2">Fikri Ilham Abdullah</motion.h1>
          <motion.p animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}   className="text-center">Putra dari Bpk. Moh Zainullah Ibu Nur Hidayati</motion.p>
        </motion.div>
      </section>
    </>
  )
}