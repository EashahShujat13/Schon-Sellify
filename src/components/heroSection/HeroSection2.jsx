import React from 'react';
import img5 from '../../assets/img/heroSection/img5.jpg';
import img6 from '../../assets/img/heroSection/img6.jpg';
import img7 from '../../assets/img/heroSection/img7.jpg';

function HeroSection2() {
  return (
    <div className="py-4 overflow-hidden">
      <section className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-4 max-w-7xl mx-auto">

        {/* Left side: img5 and img6 stacked */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          {/* IMG 5 */}
          <div className="relative h-[50vh]">
            <img src={img5} alt="img5" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between text-white p-6 text-right items-end">
              <div>
                <h2 className="text-white text-lg md:text-2xl font-bold tracking-widest">Chairs</h2>
                <h2 className="text-white text-lg md:text-4xl font-bold tracking-widest">ZIO DINING CHAIR</h2>
              </div>
              <div className="space-y-2">
                <p className="text-green-950 text-lg md:text-3xl font-norml">$120.00</p>
                <button className="text-white bg-[#282828] hover:bg-[#9ACD32] px-4 py-2 text-sm md:text-base">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* IMG 6 */}
          <div className="relative h-[50vh]">
            <img src={img6} alt="img6" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between  p-6 text-right items-end">
              <div>
                <h2 className="text-xl  md:text-2xl text-[#989898] tracking-widest font-semibold">Accessories / Lighting</h2>
                <h2 className="text-2xl md:text-3xl text-[#696969] tracking-widest font-bold">TOTEM FLOOR LAMP</h2>
              </div>
              <div className="space-y-2">
                <p className="text-lg md:text-4xl text-[#696969] font-normal">$56.00</p>
                <button className="bg-[#282828] text-white px-4 py-2 text-sm md:text-lg hover:bg-[#000000] transition">
                  HURRY UP!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: img7 full height */}
        <div className="w-full md:w-3/5 h-[100vh] relative">
          <img src={img7} alt="img7" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-start text-white px-10 py-12">
            <div className="max-w-xl text-left space-y-4">
              <h2 className="bg-[#606060] px-4 py-2 text-3xl md:text-4xl font-light inline-block tracking-widest">
                OUTDOOR LOUNGE
              </h2>
              <h1 className="text-5xl md:text-6xl font-extrabold">ELEGANT</h1>
              <h1 className="text-4xl md:text-6xl">SETTINGS</h1>
              <p className="text-xl">
                Discover our newest collection of premium lounge furniture. Designed for comfort & style.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection2;
