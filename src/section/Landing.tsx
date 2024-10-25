import Button from "../components/Button"
import BlueFlowerTwo from "../assets/img/blue-flower-2.png"
import leafOne from "../assets/img/leaf-1.png"
import leafTwo from "../assets/img/leaf-2.png"
import leafThree from "../assets/img/leaf-3.png"
import whiteFlower from "../assets/img/white-flower.png"
import waterColorBlueLight from "../assets/img/watercolor-blue-light.png"
import waterColorBlueDark from "../assets/img/watercolor-blue-dark.png"


export default function Landing() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">
        <img src={BlueFlowerTwo} alt="" className="absolute top-[-120px] left-[-80px] rotate-[130deg] z-[3] xl:w-[400px]" />
        <img src={leafOne} alt="" className="absolute top-[-50px] left-[-80px] w-72 xl:w-[400px] z-[1] opacity-30" />
        <img src={leafTwo} alt="" className="absolute top-[-180px] left-[40px] xl:left-[160px] rotate-[90deg] z-[1] opacity-30 xl:w-[400px]" />
        <img src={whiteFlower} alt="" className="absolute top-[-180px] left-[0px] xl:left-24 rotate-[90deg] z-[1] xl:w-96" />
        <img src={whiteFlower} alt="" className="absolute top-[20px] xl:top-[32px] left-[-180px] rotate-[180deg] z-[2] xl:w-96" />
        <img src={leafThree} alt="" className="absolute top-[50px] xl:top-[80px] left-[-155px] xl:left-[-125px] rotate-[160deg] z-[1] opacity-30 xl:w-96" />
        <img src={waterColorBlueLight} alt="" className="hidden xl:block absolute top-[-190px] right-[-150px] z-[0.5] opacity-75 w-[640px]" />

        <div className="max-w-[640px] w-full relative z-50">
          <h1 className="text-center text-cust-red-color font-medium mb-2">Pernikahan</h1>
          <div className="custom-heading-1 text-center">
            Rafiqah & Fikri
          </div>
          <div className="flex justify-center gap-5 text-center mb-6">
            <div>
              AHAD, 12 JANUARI 2025
            </div>
            <div>
              ·
            </div>
            <div>
              NK Cafe Karangploso
            </div>
          </div>
          <div className="w-40 mx-auto">
            <Button propOnClick={() => {
              window.location.href = 'https://maps.app.goo.gl/JwKCLxNSVpKJVixp6'
            }}>
              RSVP DI SINI
            </Button>
          </div>
        </div>

        <img src={BlueFlowerTwo} alt="" className="absolute bottom-[-120px] right-[-80px] rotate-[-55deg] z-[3] xl:w-[400px]" />
        <img src={leafOne} alt="" className="absolute bottom-[-50px] right-[-80px] w-72 xl:w-[400px] z-[1] opacity-30" />
        <img src={leafTwo} alt="" className="absolute bottom-[-180px] right-[40px] xl:right-[160px] rotate-[-90deg] z-[1] opacity-30 xl:w-[400px]" />
        <img src={whiteFlower} alt="" className="absolute bottom-[-180px] right-[0px] xl:right-24 rotate-[-90deg] z-[1] xl:w-96" />
        <img src={whiteFlower} alt="" className="absolute bottom-[20px] xl:bottom-[32px] right-[-180px] rotate-[0deg] z-[2] xl:w-96" />
        <img src={leafThree} alt="" className="absolute bottom-[50px] xl:bottom-[80px] right-[-155px] xl:right-[-125px] rotate-[-55deg] z-[1] opacity-30 xl:w-96" />
        <img src={waterColorBlueDark} alt="" className="hidden xl:block absolute bottom-[-190px] left-[-150px] rotate-90 z-[0.5] opacity-75 w-[640px]" />
      </section>
    </>
  )
}