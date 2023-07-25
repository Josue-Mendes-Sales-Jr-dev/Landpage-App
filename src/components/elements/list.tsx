import { H1 } from "./h1";
import Mask from "../../../public/img/mask.jpg";
import Image from "next/image";

interface BoxProps {
  children?: React.ReactNode;
  Logo?: string;
  className: string;
  title?: React.ReactNode;
  number: number;
  textAdd?: number;
}
export const List = (props: BoxProps) => {
  return (
    <>
      <div className={`${props.className} bg-black `}>
        <div className="flex">
          {props.number == 1 && (
            <Image src={Mask} alt="mask" className="w-[44px] h-[44px]" />
          )}
          <H1
            className={`w-screen  flex itens-center ${props.Logo} h-[44px] bg-gray-950  text-white  py-1`}
          >
            {props.title}
          </H1>
        </div>
        <div className="w-[100%]">{props.children}</div>
      
      </div>
   
    </>
  );
};
