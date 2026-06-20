import React from 'react';

const SubscribeSection = () => {
  const students = [
    { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", position: "top-[10%] left-[22%]" },
    { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", position: "bottom-[15%] left-[25%]" },
    { id: 3, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150", position: "top-[45%] left-[5%]" },
    { id: 4, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", position: "top-[10%] right-[22%]" },
    { id: 5, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150", position: "top-[35%] right-[5%]" },
    { id: 6, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150", position: "bottom-[12%] right-[25%]" },
  ];

  return (
    <section className="relative w-full min-h-[600px] bg-gray-50 flex items-center justify-center overflow-hidden py-20 px-4">
      
      {/* 1. الدوائر الزخرفية الملونة */}
      <div className="absolute top-[15%] left-[8%] w-12 h-12 rounded-full border-[6px] border-amber-400 opacity-80 hidden md:block"></div>
      <div className="absolute bottom-[18%] right-[8%] w-12 h-12 rounded-full border-[6px] border-teal-600 opacity-80 hidden md:block"></div>

      {/* 2. صور الطلاب الموزعة */}
      {students.map((student) => (
        <div
          key={student.id}
          className={`absolute ${student.position} hidden md:block transition-all duration-300 hover:scale-110 hover:rotate-3`}
        >
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.12)] bg-white p-1">
            <img
              src={student.src}
              alt="Student"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      ))}

      {/* 3. المحتوى النصي الرئيسي */}
      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
          450K+ Students are <br className="hidden md:block" /> learning from us
        </h2>
        
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima accusantium.
        </p>
        
        {/* تم تعديل الـ hover للون متناسق لتطابق ستايل الموقع */}
        <button data-aos="zoom-in" className="flex items-center gap-2 bg-amber-400 text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(245,158,11,0.25)] hover:bg-amber-500 transition-all duration-200 cursor-pointer hover:translate-y-[-2px]">
          <span>Subscribe Now</span>
          <span className="text-sm">🔔</span>
        </button>

      </div>

    </section>
  );
};

export default SubscribeSection;