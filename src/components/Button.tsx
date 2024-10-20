interface ButtonProps {
  children: string | Array<string | number>;
  propOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // tipe untuk onClick
}

export default function Button({ children, propOnClick }: ButtonProps) {
  return (
    <>
      <button onClick={propOnClick} className="flex justify-center py-3 px-4 w-full bg-cust-blue-color text-cust-bg-light-brown-color hover:bg-opacity-80 transition-all">
        {children}
      </button>
    </>
  )
}