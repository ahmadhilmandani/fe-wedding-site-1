import { MoonLoader } from "react-spinners";

interface ButtonProps {
  children: string | Array<string | number>;
  propOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  propIsLoading?: boolean;// tipe untuk onClick
}

export default function Button({ children, propOnClick, propIsLoading = false }: ButtonProps) {
  return propIsLoading ?
    <>
      <button className="relative z-[100000000000000000000000000] flex justify-center items-center gap-3 py-3 px-4 w-full bg-slate-200 text-slate-500 bg-opacity-80 cursor-not-allowed">
        {children}
        <MoonLoader size={20} color="rgb(59, 130, 246, .5)" />
      </button>
    </>
    :
    <>
      <button onClick={propOnClick} className="relative z-[100000000000000000000000000] flex justify-center py-3 px-4 w-full bg-cust-blue-color text-cust-bg-light-brown-color hover:bg-opacity-80 transition-all">
        {children}
      </button>

    </>

}