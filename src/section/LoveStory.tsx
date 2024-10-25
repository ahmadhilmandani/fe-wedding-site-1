
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
                22 Feb
                <br />
                2024
              </div>
              <div className="mb-10">
                <h2 className="custom-heading-2 mb-3">
                  Ta’ruf
                </h2>
                <p>
                  Tidak ada yang kebetulan di dunia ini semua telah tersusun rapi dengan apa yang sudah Allah Ta'ala takdirkan. Perkenalan pertama kali di bulan Februari melalui perantara ustadz/ustadzah kami yang mana kami memang belum mengenal satu sama lain sebelumnya.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                10 Mar
                <br />
                2024
              </div>
              <div>
                <h2 className="custom-heading-2 mb-3">
                  Nadhor
                </h2>
                <p>
                  Kehendak-Nya menuntun kami pada suatu pertemuan yang tak pernah disangka dengan penuh keyakinan di dalam hati kami untuk menikah, hingga akhirnya Allah Ta'ala takdirkan kami bertemu dikehidupan nyata untuk pertama kalinya.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                20 Apr
                <br />
                2024
              </div>
              <div>
                <h2 className="custom-heading-2 mb-3">
                  Khitbah
                </h2>
                <p>
                  Takdir mengungkap hal-hal yang tidak pernah terpikirkan sebelumnya seperti halnya pernikahan kami, sebagaimana rizki telah tercatat dan ditakdirkan dengan sebab-sebabnya, demikian pula pernikahan telah tercatat dan ditakdirkan.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                10 & 12 Jan
                <br />
                2025
              </div>
              <div>
                <h2 className="custom-heading-2 mb-3">
                  Akad & Resepsi
                </h2>
                <p>
                  Percayalah, bukan karena bertemu lalu berjodoh tapi karena berjodohlah kami dipertemukan, bahkan tanpa sebuah tali janji dan ikatan Allah Ta'ala mampu menautkan hati-hati kami hanya dalam satu kali pertemuan.
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