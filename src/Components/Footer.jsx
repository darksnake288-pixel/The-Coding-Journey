import React from 'react';
// استيراد أيقونات السوشيال ميديا المناسبة لشكل التصميم
import { FaWhatsapp, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gray-50 py-16 px-6 border-t border-gray-150">
      {/* الحاوية الشبكية (Grid): عمود واحد في الموبايل، عمودين في الشاشات المتوسطة، و4 أعمدة في الشاشات الكبيرة */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* العمود الأول: عن المنصة */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-800">The Coding Journey</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.
          </p>
        </div>

        {/* العمود الثاني: الكورسات */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-800">Courses</h3>
          <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Software Development</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Apps Development</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">E-learning</a></li>
          </ul>
        </div>

        {/* العمود الثالث: الروابط السريعة */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-800">Links</h3>
          <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* العمود الرابع: نموذج الإرسال والتواصل */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-800">Get In Touch</h3>
          
          {/* حقل الإدخال والزرار المدمجين */}
          <div className="flex items-center w-full max-w-xs bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-300"
            />
            <button className="bg-amber-400 text-white font-bold px-5 py-3 hover:bg-amber-500 transition cursor-pointer">
              Go
            </button>
          </div>

          {/* أيقونات السوشيال ميديا الملونة بالرمادي الداكن */}
          <div className="flex items-center gap-4 text-gray-700 text-xl mt-2">
            <a href="#" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaGlobe /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;