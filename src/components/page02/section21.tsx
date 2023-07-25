import Image from "next/image"
import ImgFundo from "../../../public/img/wallpaper.jpg"
import 'tailwindcss/tailwind.css'

export const Section21=()=>{
    return(
        <>
        <div className="flex  min-h-[80vh] bg-black w-screen items-center justify-center relative">
            <div className="absolute top-[0px] w-[100%] h-[100%] flex items-center justify-center " >
                <Image src={ImgFundo} alt='fundo' className=" w-[96%] h-[100%] mr-3"/>
            </div> 
            <div className="absolute top-[0px] z-[10] opacity-70 bg-black w-screen h-[100%]">     
            </div>

        </div>

        </>
    )
}