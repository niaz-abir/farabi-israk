"use client";

export function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#261235] via-[#2b0f3a] to-[##261235] text-white">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-16 w-6 h-6 border border-orange-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-36 right-28 w-8 h-8 border border-orange-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-orange-500 rounded-full opacity-50"></div>

      <div className="absolute top-80 left-24 w-6 h-6 border border-orange-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-80 right-80 w-8 h-8 border border-orange-500 rounded-full opacity-40"></div>

      <div className="absolute top-60 left-64 w-6 h-6 border border-orange-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-96 right-28 w-8 h-8 border border-orange-500 rounded-full opacity-40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
          Design Your Digital <br />
          Success With Our <br />
          Expert Agency!
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Welcome to our design agency, where creativity knows no bounds! We are
          a team of passionate designers, artists, and innovators who believe in
          the power of design to transform businesses and captivate audiences.
        </p>

        <div className="mt-8">
          <button className="border border-gray-600 px-6 py-2 text-xs uppercase tracking-widest text-gray-300 hover:bg-[#E06A55] hover:border-[#E06A55] hover:text-white transition-all duration-300 w-full sm:w-auto">
            Lets Talk →
          </button>
        </div>
      </div>
    </section>
  );
}
