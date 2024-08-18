import Button from "../components/Button";

export default function RSVP() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">
        <div className="max-w-[640px] w-full relative z-50">
          <h1 className="text-center mb-3 text-cust-red-color">RSVP Kehadiran</h1>
          <p className="mb-10 text-center">
            Dengan hormat kami harap kesediaannya untuk RSVP kehadiran dengan mengisi <i>form</i> di bawah ini,
          </p>
          <div className="mb-14">
            <label htmlFor="name" className="block mb-2 text-center font-bold">Nama</label>
            <input type="text" className="block w-full pb-3 outline-none ring-0 border-b border-cust-brown-color focus:border-cust-blue-color bg-transparent" name="name" id="name" />
          </div>
          <div className="mb-14 w-fit mx-auto">
            <div className="block mb-2 text-center font-bold">
              Konfirmasi Kehadiran
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <input type="radio" name="confimAttend" id="willAttend" />
                <label htmlFor="willAttend" className="block mb-2">Hadir</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="confimAttend" id="notAttend" />
                <label htmlFor="notAttend" className="block mb-2">Tidak Hadir</label>
              </div>
            </div>
          </div>
          <div className="mb-14">
            <label htmlFor="numOfGuest" className="block mb-2 text-center font-bold">Jumlah Tamu</label>
            <input type="number" className="block w-full pb-3 outline-none ring-0 border-b border-cust-brown-color focus:border-cust-blue-color bg-transparent" name="numOfGuest" id="numOfGuest" />
          </div>
          <div className="w-40 mx-auto">
            <Button>
              RSVP
            </Button>
          </div>
        </div>
      </section >
    </>
  )
}