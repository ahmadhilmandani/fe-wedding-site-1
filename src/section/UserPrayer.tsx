import Button from "../components/Button";

export default function UserPrayer() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center relative">
        <div className="max-w-[640px] w-full relative z-50">
          <h1 className="text-center mb-4 text-cust-red-color">Mohon Do'a Restu...</h1>
          <p className="mb-2 text-center">
            Kami harap, hadirin sekalian dapat memberikan doa terbaik bagi acara berbahagia kami ini dengan mengisi <i>form</i>
            di bawah
          </p>
          <textarea name="" id="" className="block w-full p-4 outline-none ring-0 border border-cust-brown-color focus:border-cust-blue-color bg-transparent m-8 mx-auto"></textarea>
          <div className="w-40 mx-auto">
            <Button>
              KIRIM DO'A
            </Button>
          </div>
        </div>
      </section >
    </>
  )
}