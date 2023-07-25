import Image from "next/image"
import ImgLogo from "../../../public/img/pass.jpg"
import {AiFillPlusCircle} from "react-icons/ai"


interface TextProps{
     textAdd: number
     text: string
     date: string
     code: string
     onChange: ()=>void
}
export const Text21=(props:TextProps)=>{
    return(
    <>
    <div className=' flex items-center justify-center gap-8  w-[100%] p-2 h-[8rem]  border-[1px] mt-[10px] relative'>
                     <div className='bg-red-500 w-[60px] h-[100px]'>
                          <Image src={ImgLogo} alt="pass" className=" w-[100%] h-[100%]"/>
                     </div>
                     <div>
                        <p className="text-green-500">{props.text}</p>
                        <p className="text-white">{props.code}
                         <span className="text-[.8rem] block">{props.date}</span>
                        </p>
                        <p className='text-gray-700'>All winners</p>
                        { props.textAdd == 1 && 
                        <button type="button" onClick={props.onChange}>
                             <AiFillPlusCircle className="text-white absolute bottom-[5px] right-[5px]"/>
                        </button>}

                     </div>
                </div>
    </>)
}