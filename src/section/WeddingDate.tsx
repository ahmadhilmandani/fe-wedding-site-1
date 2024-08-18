import Button from "../components/Button"
import WhiteFlower from "../assets/img/white-flower.png"
import LeafThree from "../assets/img/leaf-3.png"
import WatercolorBlue from "../assets/img/watercolor-blue-dark.png"
import BlueFlowerOne from "../assets/img/blue-flower-1.png"

export default function WeddingDate() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">

        <img src={BlueFlowerOne} alt="" className="hidden xl:block absolute top-0 left-[-180px] rotate-[40deg] z-[3] xl:w-[420px]" />
        <img src={WhiteFlower} alt="" className="hidden xl:block absolute top-[200px] left-[-200px] rotate-[-195deg] z-[2] xl:w-[500px]" />
        <img src={LeafThree} alt="" className="hidden xl:block absolute top-[140px] left-[-100px] z-[1] rotate-[5deg] xl:w-[400px] opacity-50" />


        <img src={WhiteFlower} alt="" className="block xl:hidden absolute top-0 left-[-120px] rotate-[60deg] z-[2]" />
        <img src={LeafThree} alt="" className="block xl:hidden absolute top-0 left-[-20px] rotate-[85deg] z-[1] opacity-50" />

        <img src={WatercolorBlue} alt="" className="block xl:hidden absolute z-[1] mx-auto left-0 right-0 w-[640px]" />

        <div className="max-w-[640px] w-full relative z-50">
          <h1 className="text-cust-red-color text-center">
            Tanggal Pernikahan
          </h1>
          <strong className="block custom-heading-1 text-center mb-5">
            04 Januari 2025
          </strong>

          <div className="flex justify-center gap-4 mb-10 mx-auto">
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <div className="xl:text-2xl">
                3
              </div>
              <div className="xl:text-2xl">
                Hari
              </div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <div className="xl:text-2xl">
                13
              </div>
              <div className="xl:text-2xl">
                Jam
              </div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <div className="xl:text-2xl">
                43
              </div>
              <div className="xl:text-2xl">
                Menit
              </div>
            </div>
            <div className="w-[20%] aspect-square flex flex-col justify-center items-center border border-cust-brown-color">
              <div className="xl:text-2xl">
                4
              </div>
              <div className="xl:text-2xl">
                Detik
              </div>
            </div>

          </div>
          <div className="w-40 mx-auto">
            <Button>
              RSVP DI SINI
            </Button>
          </div>
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