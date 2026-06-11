"use client";

import React from "react";

/* ================= TYPES ================= */

type VideoCardProps = {
  id: string;
};

/* ================= VIDEO CARD COMPONENT ================= */

function VideoCard({ id }: VideoCardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden bg-black border border-white/10">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
    </div>
  );
}

/* ================= MAIN SECTION ================= */

export default function VideoSection() {
  const youtubeVideos: string[] = [
    "dQw4w9WgXcQ",
    "9bZkp7q19f0",
    "3tmd-ClpJxA",
    "l482T0yNkeo",
  ];

  const shortVideos: string[] = [
    "RgKAFK5djSk",
    "aqz-KE-bpKQ",
    "V-_O7nl0Ii0",
    "hT_nvWreIhg",
    "CevxZvSJLk8",
    "RgKAFK5djSk",
  ];

  return (
    <section className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= YOUTUBE VIDEOS ================= */}
        <div className="bg-gradient-to-tr from-black to-[#1c1c1c] rounded-3xl p-10 border border-white/10 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Recent Work
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              YouTube videos made more engaging than ever for longer watch time
              and more subscribers.
            </p>

            <button className="mt-6 bg-orange-600 px-6 py-3 rounded-full transition">
              Explore pricing →
            </button>
          </div>

          {/* Grid 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {youtubeVideos.map((videoId, index) => (
              <VideoCard key={index} id={videoId} />
            ))}
          </div>
        </div>

        {/* ================= SHORT FORM VIDEOS ================= */}
        <div className="bg-gradient-to-tr from-black to-[#1c1c1c] rounded-3xl p-10 border border-white/10 shadow-lg mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Short Form Videos
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Nail your Reels, TikToks, LinkedIn and YouTube Shorts to optimize
              engagement and shareability.
            </p>

            <button className="mt-6 bg-orange-600 px-6 py-3 rounded-full transition">
              Explore pricing →
            </button>
          </div>

          {/* Grid 3 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortVideos.map((videoId, index) => (
              <VideoCard key={index} id={videoId} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
