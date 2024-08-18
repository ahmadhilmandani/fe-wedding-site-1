
import WatercolorBlue from "../assets/img/watercolor-blue-dark.png"
import WatercolorBlueLight from "../assets/img/watercolor-blue-light.png"

export default function LoveStory() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">
      <img src={WatercolorBlue} alt="" className="block absolute z-[1] top-[40px] left-[-180px] w-[640px]" />
        <div className="max-w-[640px] w-full relative z-50">
          <h1 className="text-cust-red-color mb-10 text-center mt-10">
            Love Story
          </h1>

          <div className="border-l border-cust-brown-color pl-5">
            <div className="flex gap-8">
              <div>
                11 Jan
                <br />
                2024
              </div>
              <div className="mb-10">
                <h2 className="custom-heading-2 mb-3">
                  Ta’ruf
                </h2>
                <p>
                  Kami memang mengalami berbagai rintangan selama menjalin hubungan. Namun, setiap cobaan dan tantangan yang kami alami selama lima tahun belakangan ini justru membuat hubungan kami lebih indah.
                  <br />
                  Kami terus melihat kebaikan dalam segala hal dan terus melangkah. Sekarang, kami siap melangkah dan memulai hidup baru bersama.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                11 Jan
                <br />
                2024
              </div>
              <div>
                <h2 className="custom-heading-2 mb-3">
                  Nadhor
                </h2>
                <p>
                  Kami memang mengalami berbagai rintangan selama menjalin hubungan. Namun, setiap cobaan dan tantangan yang kami alami selama lima tahun belakangan ini justru membuat hubungan kami lebih indah.
                  <br />
                  Kami terus melihat kebaikan dalam segala hal dan terus melangkah. Sekarang, kami siap melangkah dan memulai hidup baru bersama.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                11 Jan
                <br />
                2024
              </div>
              <div>
                <h2 className="custom-heading-2 mb-3">
                  Akad
                </h2>
                <p>
                  Kami memang mengalami berbagai rintangan selama menjalin hubungan. Namun, setiap cobaan dan tantangan yang kami alami selama lima tahun belakangan ini justru membuat hubungan kami lebih indah.
                  <br />
                  Kami terus melihat kebaikan dalam segala hal dan terus melangkah. Sekarang, kami siap melangkah dan memulai hidup baru bersama.
                </p>
              </div>
            </div>
          </div>
        </div>
      <img src={WatercolorBlueLight} alt="" className="absolute bottom-[-180px] right-[-180px] w-[640px]" />
      </section>
    </>
  )
}