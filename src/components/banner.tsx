"use client";

export function Banner() {
  const driveLink = "https://drive.google.com/drive/folders/1XIUZKiuJhtSw0iMN8wA21anKGrBOaB_s"
  const cvLink =
    "https://drive.google.com/drive/folders/1QCdj43MI3znU2YuX3k2sqBxxgTHKydNY";

  return (
    <section className="relative overflow-hidden ] text-white">
      {/* Decorative Background Circles */}
      <div className="absolute left-16 top-20 h-6 w-6 rounded-full border border-orange-500 opacity-60" />
      <div className="absolute bottom-36 right-28 h-8 w-8 rounded-full border border-orange-500 opacity-40" />
      <div className="absolute right-10 top-1/2 h-4 w-4 rounded-full bg-orange-500 opacity-50" />

      <div className="absolute left-24 top-80 h-6 w-6 rounded-full border border-orange-500 opacity-60" />
      <div className="absolute bottom-80 right-80 h-8 w-8 rounded-full border border-orange-500 opacity-40" />

      <div className="absolute left-64 top-60 h-6 w-6 rounded-full border border-orange-500 opacity-60" />
      <div className="absolute bottom-96 right-28 h-8 w-8 rounded-full border border-orange-500 opacity-40" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
        <h1 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Design Your Digital <br />
          Success With Our <br />
          Expert Agency!
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
          Welcome to our design agency, where creativity knows no bounds! We are
          a team of passionate designers, artists, and innovators who believe in
          the power of design to transform businesses and captivate audiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Drive Portfolio Button */}
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-orange-500 bg-orange-500 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-orange-400 sm:w-auto"
          >
            View My Work →
          </a>

          {/* CV Button */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-orange-500 bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-widest text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white sm:w-auto"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
