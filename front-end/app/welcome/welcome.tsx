import logo from "./logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SDGS = [
  { num: 1, title: "NO POVERTY" },
  { num: 2, title: "ZERO HUNGER" },
  { num: 3, title: "GOOD HEALTH AND WELL-BEING" },
  { num: 4, title: "QUALITY EDUCATION" },
  { num: 5, title: "GENDER EQUALITY" },
  { num: 6, title: "CLEAN WATER AND SANITATION" },
  { num: 7, title: "AFFORDABLE AND CLEAN ENERGY" },
  { num: 8, title: "DECENT WORK AND ECONOMIC GROWTH" },
  { num: 9, title: "INDUSTRY, INNOVATION AND INFRASTRUCTURE" },
  { num: 10, title: "REDUCED INEQUALITIES" },
  { num: 11, title: "SUSTAINABLE CITIES AND COMMUNITIES" },
  { num: 12, title: "RESPONSIBLE CONSUMPTION AND PRODUCTION" },
  { num: 13, title: "CLIMATE ACTION" },
  { num: 14, title: "LIFE BELOW WATER" },
  { num: 15, title: "LIFE ON LAND" },
  { num: 16, title: "PEACE, JUSTICE AND STRONG INSTITUTIONS" },
  { num: 17, title: "PARTNERSHIPS FOR THE GOALS" },
];

export function Welcome() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="SDGs Logo" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:underline">Excersises</a>
          <a href="#" className="hover:underline">Certificates</a>
          <a href="#" className="hover:underline">Games</a>
          <a href="#" className="hover:underline">News</a>
        </nav>
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1 text-sm" />
          <a href="#" className="text-sm font-medium hover:underline">About us</a>
          <a href="#" className="text-sm font-medium hover:underline">Help</a>
          <a href="#" className="text-sm font-medium hover:underline">Languages</a>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </header>
      {/* Submenu - SDGs horizontal scroll with Swiper */}
      <div className="border-b border-gray-100 px-2 py-1 bg-white overflow-x-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView="auto"
          spaceBetween={20} // 5cm = 188px
          className="!px-4"
        >
          {SDGS.map((g) => (
            <SwiperSlide
              key={g.num}
              className="flex items-center justify-center"
              style={{ width: "auto" }} // Đảm bảo slide rộng theo nội dung
            >
              <span className="inline-block text-xs md:text-sm font-semibold text-gray-700 hover:text-green-700 cursor-pointer whitespace-nowrap px-6 py-2 rounded transition-colors duration-150 hover:bg-green-100">
                {g.title}
              </span>
            </SwiperSlide>
          ))}
          {/* Custom navigation buttons (ẩn trên mobile) */}
          <div className="swiper-button-prev hidden md:block !text-green-600" />
          <div className="swiper-button-next hidden md:block !text-green-600" />
        </Swiper>
      </div>
      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-600">17 SUSTAINABLE DEVELOPMENT</span> <span className="text-black">GOALS</span>
        </h1>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          The 17 Sustainable Development Goals (SDGs), adopted by all UN Member States in 2015, form the heart of the 2030 Agenda for Sustainable Development—a global blueprint to end poverty, reduce inequality, and protect the planet. These interconnected goals aim to ensure access to quality education, clean water, affordable energy, sustainable cities, climate action, and more. Together, they provide a universal call to action for governments, businesses, and communities to build a more inclusive, resilient, and sustainable future for all.<br />- United Nation -
        </p>
        {/* SDGs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
          {SDGS.map((g) => (
            <div key={g.num} className="bg-green-600 text-white rounded-lg flex flex-col items-center justify-center p-4 aspect-square shadow hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-2">{g.num}</div>
              <div className="text-center text-xs font-semibold leading-tight">{g.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
