import "tailwindcss/tailwind.css";
import { H1 } from "../elements/h1";
import Image from "next/image";
import ImgGraph from "../../../public/img/graph.jpg";

export const Section03 = () => {
  return (
    <>
      <div className=" bg-black text-white w-screen h-[50vh]  flex flex-col items-center justify-center">
        <div className="flex items-center gap-5 justify-center">
          <Image
            src={ImgGraph}
            alt="grafico"
            className="w-[6rem] bg-blue-400"
          />
          <H1 className="w-[12rem] sm:w-[20rem] text-[2.2rem] sm:text-[3rem] relative">
            Road Maps
            <span className="top-[30px] right-[0px] sm:right-[70px]  absolute ml-[15rem] bg-orange-500 flex content w-[8px] h-[8px]"></span>
          </H1>
        </div>
        <div>
          <H1 className="text-[1.6rem]">Q3 2023</H1>
        </div>
      </div>
    </>
  );
};
