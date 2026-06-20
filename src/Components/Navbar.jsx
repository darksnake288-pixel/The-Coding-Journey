import React, { useState } from 'react' // 1. ضفنا الـ useState هنا
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5"; // ضفتلك أيقونة قفل (X) عشان شكلها احترافي لما القائمة تفتح

const Navbar = () => {
    // 2. الـ State اللي بيتحكم في فتح وقفل قائمة الموبايل
    const [isOpen, setIsOpen] = useState(false);

    const ServiceData =[
        { id:1, title:'Home', link:'#' },
        { id:2, title:'Services', link:'#' },
        { id:3, title:'About Us', link:'#' },
        { id:4, title:'Our Team', link:'#' },
        { id:5, title:'Contant Us', link:'#' } // ملحوظة جانبية: اسمها Contact Us ☕
    ]

    return (
     <nav data-aos="fade-down" className="relative bg-white z-50"> {/* ضفنا relative هنا عشان المنيو تظبط تحتها */}
        <div className="container py-10 flex justify-between items-center">
            
            {/**Logo Section */}
            <div>
                <h1 className="text-2xl font-bold pl-25">The Coding Journey</h1>
            </div>

            {/**Menu Section (Desktop) */}
            <div className="hidden md:block"> {/* عدلت دي لـ md عشان تتماشى مع الـ ul */}
                <ul className="flex gap-6">
                    {ServiceData.map((service)=>(
                        <li key={service.id}>
                            <a className='inline-block hover:text-green-400 duration-200 hover:translate-y-[-2px]' href={service.link}>
                                {service.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/**Button Section (Desktop) */}
            <div className='hidden md:block'>
                <button className='bg-amber-400 rounded-xl text-white px-6 py-3 cursor-pointer hover:bg-green-700 duration-200 hover:translate-y-[-2px]'>
                    Sign In
                </button>
            </div>

            {/**Mobile Navbar Hamburger Icon */}
            {/* لما يدوس على الأيقونة بيعكس حالة الـ Open والـ Close */}
            <div className='block md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose className='text-4xl'/> : <LuMenu className='text-4xl'/>}
            </div>
        </div>

        {/** 3. الـ Dropdown Menu الخاصة بالموبايل */}
        {/* مش هتظهر غير لو الـ isOpen بـ true */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-5 px-6 block md:hidden animate-fade-in">
                <ul className="flex flex-col gap-4">
                    {ServiceData.map((service)=>(
                        <li key={service.id} className="border-b border-gray-50 pb-2">
                            <a 
                                onClick={() => setIsOpen(false)} // بتقفل القائمة لما العميل يدوس على لينك
                                className='block text-lg text-gray-700 hover:text-green-400 duration-200' 
                                href={service.link}
                            >
                                {service.title}
                            </a>
                        </li>
                    ))}
                    {/* ضفنا زرار تسجيل الدخول جوه منيو الموبايل برضه عشان ميعطلش */}
                    <li className="pt-2">
                        <button className='w-full bg-amber-400 rounded-xl text-white py-3 cursor-pointer hover:bg-green-700 duration-200'>
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>
        )}

     </nav>
  )
}

export default Navbar