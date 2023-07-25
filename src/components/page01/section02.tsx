import "tailwindcss/tailwind.css";
import { Box } from "../elements/box";
import { Text01 } from "./text01";
import { Text02 } from "./text02";
import Image from "next/image";
import About from "../../../public/img/about.jpg";

export const Section02 = () => {
  return (
    <>
      <div className=" bg-black text-white w-screen py-[5rem] min-h-[40hv] flex flex-col items-center justify-center">
        <div className=" flex flex-col mb-[6rem] gap-2 items-center justify-center sm:w-1/2 w-[90%]">
          <h1 className="text-[60px] relative flex itens-center h-[100px]">
            <Image
              src={About}
              alt="mask"
              className="absolute left-[-60px] top-[15px] flex itens-center justify-center w-[60px] h-[60px]"
            />{" "}
            ABOUT
            <span className="flex absolute bg-orange-400 content w-[10px] h-[10px] right-[-2px] top-[60px]"></span>
          </h1>
          <p>
            Big Player is a pioneering game never seen before. A growth economy
          </p>
          <p className="text-gray-700">
            Your Power in the game increases every day.
          </p>
          <p>
            Create account, Adjust{" "}
            <span className="text-gray-800">your probability</span>
          </p>
          <p> Get advantages, Earn daily</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Box
            className="flex flex-col justify-center  sm:w-2/5 w-[340px]"
            number={1}
            title={` Start Here`}
            Logo="text-[1.3rem]"
          >
            <Text01 />
          </Box>
          <Box
            className="flex flex-col justify-center sm:w-2/5 w-[340px]"
            number={0}
            title="Winner"
            Logo=" justify-center text-[1.6rem]"
          >
            <Text02 />
          </Box>
        </div>
      </div>
    </>
  );
};
