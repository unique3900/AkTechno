import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-8 mt-10">
            <div className="flex flex-row gap-6 items-center justify-between w-11/12">
                {/* Logo */}
                <Link href={'/'} className=""><img src="/bg/logo.png" className="w-60" alt="" /></Link>

                <div className="flex flex-col items-start lg:flex-row gap-4 lg:items-center">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot size={24} className="text-red-700"/>
                        <span>New Road, Kathmandu</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt size={24} className="text-red-700"/>
                        <span>+977 9803705640</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <MdMail size={24} className="text-red-700"/>
                        <span>contact@aktechnotip.com</span>
                    </div>
                </div>
            </div>
        
        <p className="text-sm justify-center mt-7">©2024 AK Techno, All Rights Reserved </p>
    </div>
  )
}

export default Footer