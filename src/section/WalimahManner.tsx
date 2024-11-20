import { IconBuildingMosque, IconCameraOff, IconHeartFilled, IconShirtFilled, IconSmokingNo, IconSoupFilled } from '@tabler/icons-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function LoveStory() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="w-full min-h-screen flex justify-center items-center relative my-10">
      <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="max-w-[720px] w-full relative z-50">
        <motion.h1 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="text-cust-red-color mb-10 text-center mt-10">
          Adab Walimah
        </motion.h1>
        <div className='flex justify-center gap-10 flex-wrap'>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconShirtFilled size={'100%'} className='fill-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Memakai pakaian yang sopan dan menutup aurat
            </motion.h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconBuildingMosque size={'100%'} className='fill-white stroke-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Memperhatikan waktu sholat
            </motion.h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconHeartFilled size={'100%'} className='fill-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Mendoakan kedua mempelai
            </motion.h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconSmokingNo size={'100%'} className='stroke-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Dilarang merokok
            </motion.h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconSoupFilled size={'100%'} className='fill-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Makan & minum sambil duduk
            </motion.h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <motion.div animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconCameraOff size={'100%'} className='stroke-white' />
            </motion.div>
            <motion.h3 animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0px" : "15px" }} transition={{ duration: 0.8, ease: "easeOut" }}  className="custom-heading-2 text-[16px] text-center mb-3">
              Dilarang mengambil foto tanpa se izin kedua mempelai
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </section>
  )
}