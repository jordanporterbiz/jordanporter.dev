import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#f4b400] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#f4b400] mr-2" />
                Go To Website
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#4285f4]">
            <h1 className="font-bold text-white">
                Want updates on all my adventures and upcoming content? Subscribe to my newsletter! 👉  
            </h1>

            <Link href="JordanPorter.Dev/Subscribe" className="text-[#f4b400] font-bold ml-2"> 
            www.JordanPorter.Dev/Subscribe
            </Link>
        </div>
        </div>



       <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar