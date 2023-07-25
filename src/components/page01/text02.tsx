import Image from "next/image"
import ImgLogo from "../../../public/img/pass.jpg"

export const Text02=()=>{
    return(
    <>
    <div className=' flex items-center justify-center gap-8  w-[100%] p-2 h-[8rem]  border-[1px] mt-[10px]'>
                     <div className='bg-red-500 w-[60px] h-[100px]'>
                          <Image src={ImgLogo} alt="pass" className=" w-[100%] h-[100%]"/>
                     </div>
                     <div>
                        <p className="text-green-500">Green Pass</p>
                        <p className="text-white">Next 
                         <span className="text-[.8rem] block">00/22/00</span>
                        </p>
                        <p className='text-gray-700'>All winners</p>

                     </div>
                </div>
    </>)
}