export default function Button({ children }: { children: string | Array<string | number> }) {
  return (
    <>
      <button className="flex justify-center py-3 px-4 w-full bg-cust-blue-color text-cust-bg-light-brown-color hover:bg-opacity-80 transition-all">
        {children}
      </button>
    </>
  )
}