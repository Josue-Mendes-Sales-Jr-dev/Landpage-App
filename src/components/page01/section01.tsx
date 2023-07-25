import Image from "next/image"
import ImgBoy from '../../../public/img/boy.png'
import ImgFundo from "../../../public/img/wallpaper.jpg"
import 'tailwindcss/tailwind.css'
import Link from "next/link"

export const Section01=()=>{
    return(
        <>
        <div className="flex  min-h-[80vh] bg-black w-screen items-center justify-center relative">
            <div className="absolute w-[100%] h-[100%] flex items-center justify-center " >
                <Image src={ImgFundo} alt='fundo' className=" w-[96%] h-[100%] mr-3"/>
            </div> 
            <div className="absolute z-[10] opacity-70 bg-black w-screen h-[100%]">
                       
            </div>
             <div className=" absolute z-[10] w-3/5 sm:mr-0  mr-[4.5rem]">
                <div className="text-white sm:w-[100%] " >
                    <h1 className="text-[83px] ml-[-7.5px] my-[-25px]">EARN</h1>
                    <h2 className="text-[50px] relative">INFINITY
                    <span className='flex absolute bg-orange-400 content w-[9px] h-[9px] left-[186px] top-[49px]'></span>
                    </h2>
                    <p className="pb-5 w-[150px]">
                        GAME, Play To Earn,
                        In Terra Classic.
                    </p>
                </div>
                <Link href='/winner' className="py-1 px-[5.2rem] bg-yellow-400 w-[200px] hover:bg-yellow-500">
                    Start
                </Link>
            </div>
            <div className=" w-2/5 absolute z-[10] right-[10px]">
                <Image src={ImgBoy} width='280' height='330' alt='boy' />
            </div>
        </div>
        </>
    )
}