import { IconBuildingMosque, IconCameraOff, IconHeartFilled, IconShirtFilled, IconSmokingNo, IconSoupFilled } from '@tabler/icons-react';

export default function LoveStory() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center relative my-10">
      <div className="max-w-[720px] w-full relative z-50">
        <h1 className="text-cust-red-color mb-10 text-center mt-10">
          Adab Walimah
        </h1>
        <div className='flex justify-center gap-10 flex-wrap'>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconShirtFilled size={'100%'} className='fill-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Memakai pakaian yang sopan dan menutup aurat
            </h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconBuildingMosque size={'100%'} className='fill-white stroke-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Memperhatikan waktu sholat
            </h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconHeartFilled size={'100%'} className='fill-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Mendoakan kedua mempelai
            </h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconSmokingNo size={'100%'} className='stroke-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Dilarang merokok
            </h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconSoupFilled size={'100%'} className='fill-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Makan & minum sambil duduk
            </h3>
          </div>
          <div className='min-w-[160px] flex-1'>
            <div className='size-20 mx-auto mb-5 bg-cust-blue-color p-5 flex justify-center items-center rounded-full'>
              <IconCameraOff size={'100%'} className='stroke-white' />
            </div>
            <h3 className="custom-heading-2 text-[16px] text-center mb-3">
              Dilarang mengambil foto tanpa se izin kedua mempelai
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}