import React from 'react';
import img1 from '../../assets/img/heroSection/img1.jpg';
import img2 from '../../assets/img/heroSection/img2.jpg';
import img3 from '../../assets/img/heroSection/img3.jpg';
import img4 from '../../assets/img/heroSection/img4.jpg';

function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <section className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-4 min-h-screen max-w-7xl mx-auto px-4">

        {/* Image 1 */}
        <div className="w-full md:w-3/5 relative">
          <img src={img1} alt="img1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center px-10 py-12">
            <div className="text-white text-left space-y-4 max-w-xl">
              <h2 className="bg-[#606060] px-4 py-2 text-3xl md:text-4xl font-light inline-block">FURNITURE DESIGNS IDEAS</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold">NEW</h1>
              <h1 className="text-4xl md:text-6xl">Collection</h1>
              <p className="text-xl">Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore</p>
              <p className="font-bold text-3xl md:text-4xl">$78.00</p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full md:w-[26%] relative">
          <img src={img2} alt="img2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 text-white p-6">
            <div className="absolute top-6 left-6">
              <h2 className="text-sm md:text-base font-bold mb-1 tracking-widest">SOFAS & ARMCHAIRS</h2>
              <h1 className="text-xl md:text-2xl font-semibold tracking-widest">3 Seater Leather Sofa</h1>
            </div>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 bg-sky-500 rounded-full flex flex-col items-center justify-center text-center shadow-md">
              <p className="line-through text-[#D3D3D3] text-sm">$659.00</p>
              <p className="text-white font-bold text-lg md:text-2xl">$499.00</p>
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="text-sm md:text-base bg-[#282828] text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition">SHOP NOW</button>
            </div>
          </div>
        </div>

        {/* Image 3 & 4 stacked */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          {/* Image 3 */}
          <div className="relative h-[50%]">
            <img src={img3} alt="img3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 text-white flex flex-col justify-between p-4">
              <div className="text-right pt-4 pr-4">
                <h2 className="text-lg text-[#585858] tracking-widest md:text-2xl font-bold">ACRYLIC FABRIC</h2>
                <h2 className="text-lg text-[#585858] tracking-widest md:text-2xl font-bold">BEAN BAG</h2>
              </div>
              <div className="text-right pb-4 pr-4 space-y-2">
                <p className="text-red-900 text-lg md:text-3xl">$99.00</p>
                <button className="bg-[#282828] text-white px-4 py-2 text-sm md:text-base hover:bg-red-400">SHOP NOW</button>
              </div>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative h-[50%]">
            <img src={img4} alt="img4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 text-blue-950 flex flex-col justify-between p-4">
              <div className="pt-4 pl-4">
                <h2 className="text-xl md:text-2xl tracking-widest font-semibold">CHAIR WITH</h2>
                <h2 className="text-xl md:text-2xl tracking-widest font-semibold">ARMREST</h2>
              </div>
              <div className="pb-4 pl-4 space-y-2">
                <p className="text-lg md:text-3xl font-normal">$99.00</p>
                <button className="bg-[#282828] text-white px-4 py-2 text-sm md:text-lg hover:bg-blue-950">HURRY UP!</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default HeroSection;
