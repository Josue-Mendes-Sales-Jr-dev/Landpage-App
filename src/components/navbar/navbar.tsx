import Link from "next/link"
import Image from "next/image"
import ImgBig from "../../../public/img/big.jpg" 
import 'tailwindcss/tailwind.css'

export const Navbar=()=> {
    return(
        <>
         <div className="flex items-center  bg-black text-white pl-8 h-[50px]">
            <nav className="flex w-1/2">
            <Link className="text-xl" href='/'>
                <Image src={ImgBig} alt='big' className=" w-[52px] "/>
            </Link>
                <ul className=" flex gap-5">
                    <li className="pl-5"><Link className="text-sm" href='/'>ABOUT</Link></li>
                    <li><Link className="text-sm" href='/'>ROAD MAP</Link></li>
                </ul>
            </nav>
         </div>
        </>
    )
}