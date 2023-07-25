import {BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {SiMonster} from 'react-icons/si'
export const Footer =()=>{
    return(
    <>
    <div className="w-screen text-white bg-black gap-2 h-[20vh] flex flex-col itens-center justify-center">
         <div className='text-[12px] flex itens-center justify-center gap-2'>
            <BsTwitter/>
            <FaTelegramPlane/>
            <FaDiscord/>
            <SiMonster/>
         </div>
         <div className='flex itens-center justify-center'>
            <h2 className='text-[12px]'><span>&copy;</span> BigPlayer 2023</h2>
        </div>
    </div>
    </>
    )
}